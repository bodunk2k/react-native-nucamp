import React, { Component } from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { View, Platform, StyleSheet, Text, ScrollView, 
    Alert, ToastAndroid, Image } from 'react-native';
import { createStackNavigator, createDrawerNavigator, 
DrawerItems } from 'react-navigation';
import AboutComponent from './AboutComponent';
import ContactComponent from './ContactComponent';
import Favorites from './FavoritesComponent';
import Login from './LoginComponent';
import Reservation from './ReservationComponent';
import { Icon } from 'react-native-elements';
import SafeAreaView, { SafeAreaProvider } from 'react-native-safe-area-view';
import { connect } from 'react-redux';
import { fetchCampsites, fetchComments, fetchPromotions,
    fetchPartners} from '../redux/ActionCreators';
import NetInfo, { getConnectionInfo } from '@react-native-community/netinfo';

const mapDispatchToProps = {
    fetchCampsites,
    fetchComments,
    fetchPromotions,
    fetchPartners
};

const DirectoryNavigator = createStackNavigator(
    {
        Directory: { 
            screen: Directory,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon 
                    name='list'
                    color='white'
                    type='font-awesome'
                    iconStyle={StyleSheet.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
        CampsiteInfo: { screen: CampsiteInfo }
    },
    {
        InitialRouteName: 'Directory',
        navigationOptions: {
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
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon 
            name='home'
            color='white'
            type='font-awesome'
            iconStyle={StyleSheet.stackIcon}
            onPress={() => navigation.toggleDrawer()}
        />
        })
    }
)

const AboutNavigator = createStackNavigator(
    {
        AboutComponent: { screen: AboutComponent}
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon 
            name='info-circle'
            color='white'
            type='font-awesome'
            iconStyle={StyleSheet.stackIcon}
            onPress={() => navigation.toggleDrawer()}
        />
        })
    }
);

const ContactNavigator = createStackNavigator(
    {
        ContactComponent: { screen: ContactComponent}
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon 
            name='address-card'
            color='white'
            type='font-awesome'
            iconStyle={StyleSheet.stackIcon}
            onPress={() => navigation.toggleDrawer()}
        />
        })
    }
);

const ReservationNavigator = createStackNavigator(
    {
        ReservationComponent: { screen: Reservation}
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon 
            name='tree'
            color='white'
            type='font-awesome'
            iconStyle={StyleSheet.stackIcon}
            onPress={() => navigation.toggleDrawer()}
        />
        })
    }
);

const FavoritesNavigator = createStackNavigator(
    {
        Favorites: { screen: Favorites}
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon 
            name='heart'
            color='white'
            type='font-awesome'
            iconStyle={StyleSheet.stackIcon}
            onPress={() => navigation.toggleDrawer()}
        />
        })
    }
);

const LoginNavigator = createStackNavigator(
    {
        Login: { screen: Login}
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon 
            name='sign-in'
            color='white'
            type='font-awesome'
            iconStyle={StyleSheet.stackIcon}
            onPress={() => navigation.toggleDrawer()}
        />
        })
    }
);

const CustomDrawerContentComponent = props => (
<ScrollView>
    <SafeAreaProvider>
    <SafeAreaView
        style={styles.container}
        forceInse={{top: 'always', horizontal: 'never'}}>
        <View style={StyleSheet.drawerHeader}>
            <View style={{flex: 1}}>
                <Image source={require('./images/logo.png')} style={styles.drawerImage} />
            </View>
            <View style={{flex: 2}}>
                <Text style={styles.drawerHeaderText}>NuCamp</Text>
            </View>
        </View>
        <DrawerItems {...props} />
    </SafeAreaView>
    </SafeAreaProvider>
</ScrollView>
);

const MainNavigator = createDrawerNavigator(
    {
        Login: { 
            screen: LoginNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon 
                    iconStyle={StyleSheet.stackIcon}
                        name='sign-in'
                        color='white'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Home: { 
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon 
                    iconStyle={StyleSheet.stackIcon}
                        name='home'
                        color='white'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Directory: {
            screen: DirectoryNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon 
                    iconStyle={StyleSheet.stackIcon}
                        name='list'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Reservation: {
            screen: ReservationNavigator,
            navigationOptions: {
                drawerLable: 'Reserve Campsite',
                drawerIcon: ({tintColor}) => (
                    <Icon 
                    iconStyle={StyleSheet.stackIcon}
                        name='tree'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Favorites: {
            screen: FavoritesNavigator,
            navigationOptions: {
                drawerLable: 'My Favorites',
                drawerIcon: ({tintColor}) => (
                    <Icon 
                    iconStyle={StyleSheet.stackIcon}
                        name='heart'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        About: { 
            screen: AboutNavigator,
            navigationOptions: {
                drawerLable: 'About Us',
                drawerIcon: ({tintColor}) => (
                    <Icon 
                    iconStyle={StyleSheet.stackIcon}
                        name='info-circle'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Contact: { 
            screen: ContactNavigator,
            navigationOptions: {
                drawerLable: 'Contact Us',
                drawerIcon: ({tintColor}) => (
                    <Icon 
                    iconStyle={StyleSheet.stackIcon}
                        name='address-card'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        } 
    },
    {
        initialRouteName: 'Home',
        drawerBackgroundColor: '#CEC8FF',
        contentComponent: CustomDrawerContentComponent
    }
);

class Main extends Component {

        componentDidMount() {
            this.props.fetchCampsites();
            this.props.fetchComments();
            this.props.fetchPromotions();
            this.props.fetchPartners();
            this.showNetInfo();
            /*showNetInfo.fetch().then(connectionInfo => {
                async
                (Platform.OS === 'ios') ?
                    Alert.alert('Initial Network Connectivity Type:', connectionInfo.type)
                    : ToastAndroid.show('Initial Network Connectivity Type: ' +
                        connectionInfo.type, ToastAndroid.LONG);
            });*/
            
/* we must use this since we are in a method */
            this.unsubscribedNetInfo = NetInfo.addEventListener(connectionInfo => {
                this.handleConnectivityChange(connectionInfo);
            }); 
        }

        async showNetInfo ()  {
            const connectionInfo =  await NetInfo.fetch();
               (Platform.OS === 'ios') ?
                  Alert.alert('Initial Network Connectivity Type:', connectionInfo.type)
                  : ToastAndroid.show('Initial Network Connectivity Type: ' +
                      connectionInfo.type, ToastAndroid.LONG)
            
              
          }

        componentWillUnmount() {
            this.unsubscribedNetInfo();
        }

        handleConnectivityChange = connectionInfo => {
            let connectionMsg = 'You are now connected to an active network.';
            switch (connectionInfo.type) {
                case 'none':
                    connectionMsg = 'No network connection is active.';
                    break;
                case 'unknown':
                    connectionMsg = 'The connection network state is unknown.';
                    break;
                case 'cellular':
                    connectionMsg = 'You are now connected to a cellular network.';
                    break;
                case 'wifi':
                    connectionMsg = 'You are now connected to a WiFi network.';
                    break;
            }
            (Platform.OS === 'ios') ? Alert.alert('Connection change:', connectionMsg)
                : ToastAndroid.show(connectionMsg, ToastAndroid.LONG);
        }
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

const styles = StyleSheet.create({
    containe: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: '#5637DD',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText:{
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});

export default connect(null, mapDispatchToProps)(Main);