import React, { useEffect, useState } from 'react'
import { View, TextInput, Keyboard } from "react-native"
import { searchStyle } from './search.style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'

const Search = ({ value, onChange, placeholder, onSubmit }) => {

    const [bottom, setBottom] = useState(30)

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            setBottom(380)
        })

        Keyboard.addListener('keyboardDidHide', () => {
            setBottom(30)
        })
    })

    return (
        <View style={[ searchStyle.searchContainer, { bottom: bottom } ]} >
            <TextInput
                style={searchStyle.input}
                onChangeText={onChange}
                placeholder={placeholder} 
                value={value}
                autoCapitalize="words"
                autoCorrect={false}
            />

            <TouchableOpacity style={searchStyle.button} onPress={onSubmit} >
                <MaterialIcons name="my-location" size={25} color="white" />
            </TouchableOpacity>
        </View>
    )

}

export { Search }
