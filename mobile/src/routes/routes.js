import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Home, Profile } from '../pages'

const Routes = createAppContainer(

    createStackNavigator({
        Home: {
            screen: Home,

            navigationOptions: {
                title: 'DevRadar',

                headerTitleAlign: 'center',

                headerTintColor: 'white',

                headerStyle: {
                    backgroundColor: '#7D40E7'
                },

                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }
        },

        Profile: {
            screen: Profile,

            navigationOptions: {
                title: 'Perfil no Github',

                headerTitleAlign: 'center',

                headerTintColor: 'white',

                headerStyle: {
                    backgroundColor: '#7D40E7'
                },

                headerTitleStyle: {
                    fontWeight: 'bold'
                },

                headerBackTitleVisible: false
            }
        }
    })

)

export default Routes
