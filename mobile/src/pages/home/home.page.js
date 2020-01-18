import React, { useEffect, useState } from 'react'
import { homeStyle } from './home.style'
import MapView from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import { getDevsSearch } from '../../services/dev/dev.service'
import { MapMarker } from '../../components/map-marker/map-marker.component'
import { Search } from '../../components/search/search.component'

import { connect, disconnect, subscribeToNewDevs } from '../../services'

const Home = ({ navigation }) => {

    const [ coords, setCoords ] = useState(null)
    const [ devs, setDevs ] = useState([])
    const [ search, setSearch ] = useState('')

    useEffect(() => {
        getInitialLocation()
    }, [])

    useEffect(() => {
        subscribeToNewDevs(dev => setDevs([ ...devs, dev ]))
    }, [devs])

    const navigateToProfile = (githubUsername) => {
        navigation.push('Profile', { githubUsername })
    }

    const getUserCoords = async (granted) => {
        if(granted) {
            const { coords } = await getCurrentPositionAsync({
                enableHighAccuracy: true
            })

            const { latitude, longitude } = coords

            setCoords({
                latitude,
                longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            })
        }
    }

    const getInitialLocation = async () => {
        const { granted } = await requestPermissionsAsync()

        await getUserCoords(granted)
    }

    const handleCoordChange = (region) => {
        setCoords(region)
    }

    const setupWebsocket = () => {
        disconnect()

        const { latitude, longitude } =  coords

        connect(latitude, longitude, search)
    }

    const getDevelopersSearch = async () => {
        setupWebsocket()
        const devs = await getDevsSearch(coords.latitude, coords.longitude, search)
        setDevs(devs)
    }

    const mapDevelopersLocations = () => (
        devs.map((dev, key) => (
            <MapMarker
                key={key}
                coords={{ longitude: dev.location.coordinates[0],  latitude: dev.location.coordinates[1] }}
                dev={dev}
                navigateToProfile={navigateToProfile}
            />
        ))
    )

    const renderMapView = () => {
        return (
            <>
                <MapView onRegionChangeComplete={handleCoordChange} initialRegion={coords} style={homeStyle.map}>
                    {mapDevelopersLocations()}
                </MapView>

                <Search
                    placeholder="Buscar por tecnologias..."
                    onChange={(text) => setSearch(text)}
                    value={search}
                    onSubmit={getDevelopersSearch}
                />
            </>
        )
    }

    const checkMapRender = () => {
        return coords ? renderMapView() : null
    }

    return checkMapRender()

}

export { Home }
