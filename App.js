import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from'react-navigation-tabs';
import {facebook} from './Screens/fb';
import {instagram} from './Screens/in';
import {createAppConatiner} from 'react-navigation';

export default class App extends React.Component {
  render(){
    return (
    <AppContainer /> 
  );
    }
}

const TabNavigator = createBottomTabNavigator({
  Facebook : {screen : facebook},
  Instagram : {screen : instagram}
});

const AppContainer = createAppConatiner(TabNavigator)
