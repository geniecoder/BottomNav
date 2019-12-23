import React from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import Ionicons from 'react-native-vector-icons';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
import DetailsScreen from './pages/DetailsScreen';
import ProfileScreen from './pages/ProfileScreen';

const App = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Profile: ProfileScreen,
    Settings: SettingsScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        if (routeName == 'Home') {
          return (
            <Image
              source={require('./assets/home.png')}
              style={{width: 32, height: 32}}
            />
          );
        } else if (routeName == 'Details') {
          return (
            <Image
              source={require('./assets/details.png')}
              style={{width: 26, height: 26}}
            />
          );
        } else if (routeName == 'Profile') {
          return (
            <Image
              source={require('./assets/profile.png')}
              style={{width: 26, height: 26}}
            />
          );
        } else if (routeName == 'Settings') {
          return (
            <Image
              source={require('./assets/setting.png')}
              style={{width: 26, height: 26}}
            />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
    },
  },
);

export default createAppContainer(App);
