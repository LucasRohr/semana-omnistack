import React from 'react'
import { View, Image, Text } from "react-native"
import { mapMarkerStyle } from './map-marker.style'
import { Marker, Callout } from "react-native-maps"

const MapMarker = ({ coords, dev, navigateToProfile }) => {

    return (
        <Marker coordinate={coords} >
            <Image source={ { uri: dev.avatar_url } } style={mapMarkerStyle.mapMarkerAvatar} />

            <Callout onPress={() => navigateToProfile(dev.githubUsername)} >
                <View style={mapMarkerStyle.mapMarkerContainer} >
                    <Text style={mapMarkerStyle.devName} > {dev.name} </Text>
                    <Text style={mapMarkerStyle.devBio} > {dev.bio} </Text>
                    <Text style={mapMarkerStyle.devTechs} > {dev.techs.join(', ')} </Text>
                </View>
            </Callout>
        </Marker>
    )

}

export { MapMarker }
