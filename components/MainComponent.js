import React, { Component } from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import AboutComponent from './AboutComponent';
import ContactComponent from './ContactComponent';

const DirectoryNavigator = createStackNavigator(
    {
        Directory: { screen: Directory},
        CampsiteInfo: { screen: CampsiteInfo }
    },
    {
        InitialRouteName: 'Directory',
        NavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home}
    },
    {
        NavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
)

const AboutNavigator = createStackNavigator(
    {
        Home: { screen: AboutComponent}
    },
    {
        NavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
)

const ContactNavigator = createStackNavigator(
    {
        Home: { screen: ContactComponent}
    },
    {
        NavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
)

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Directory: {screen: DirectoryNavigator},
        About: { screen: AboutComponent },
        Contact: { screen: ContactComponent} 
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
);

class Main extends Component {
        render() {
            return ( 
                <View style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
                    }}>
                    <MainNavigator/>       
                </View>
            );
        }
    
}

export default Main;