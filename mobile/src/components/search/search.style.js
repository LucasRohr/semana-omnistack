import { StyleSheet } from 'react-native'

export const searchStyle = StyleSheet.create({

    searchContainer: {
        position: 'absolute',
        bottom: 30,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    input: {
        width: '70%',
        backgroundColor: 'white',
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 15,
        fontSize: 16,
        shadowColor: "#000000",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: {
            height: 4,
            width: 4
        },
        elevation: 3
    },

    button: {
        width: 70,
        height: 70,
        backgroundColor: '#7D40E7',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000000",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: {
            height: 4,
            width: 4
        },
        elevation: 4
    }

})

