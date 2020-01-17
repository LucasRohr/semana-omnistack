import { StyleSheet } from 'react-native'

export const mapMarkerStyle = StyleSheet.create({

    mapMarkerContainer: {
        width: 250,
        backgroundColor: 'white',
        borderRadius: 3,
        padding: 5
    },

    mapMarkerAvatar: {
        width: 50,
        height: 50,
        borderRadius: 3
    },

    devName: {
        fontWeight: 'bold',
        fontSize: 16
    },

    devBio: {
        marginTop: 5,
        color: '#666666'
    },

    devTechs: {
        marginTop: 5
    }

})
