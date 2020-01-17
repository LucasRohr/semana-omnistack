import React from 'react'
import { WebView } from 'react-native-webview'
import { profileStyle } from './profile.style'

const Profile = ({ navigation }) => {
    const githubUsername = navigation.getParam('githubUsername')

    return <WebView source={{ uri: `https://github.com/${githubUsername}` }} style={profileStyle.profile} />
}

export { Profile }
