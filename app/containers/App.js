/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ListView} from 'react-native';
import { createStackNavigator , createBottomTabNavigator} from 'react-navigation';

import MainContainer from './MainContainer';
import CategoryContainer from './CategoryContainer'
import About from '../pages/About/About';
import Feedback from '../pages/Feedback/Feedback';
// import Splash from '../pages/Splash'

const TabContainer = createBottomTabNavigator(
    {
        Main: {screen: MainContainer},
        Category: {screen: CategoryContainer},
        Feedback: {screen: Feedback},
        About: {screen: About}
    }, 
    {
        // lazy: false,
        // tabBarPosition: 'bottom',
        // tabBarOptions: {
        //     activeTintColor: '#3e9ce9',
        //     inactiveBackgroundColor: '#999999',
        //     showIcon: true,
        //     style:{
        //         backgroundColor: '#fff'
        //     },
        //     indicatorStyle:{
        //         opacity: 0
        //     },
        //     tabStyle:{
        //         padding:0
        //     }
        // }
    }
)

const App = createStackNavigator(
    {
    // Splash: {screen: Splash},
    // Category: {
    //     screen: CategoryContainer,
    // }
        Home:{screen: TabContainer}
    },
    // {
    //     Home:{
    //         screen: TabContainer,
    //         navigationOptions: {
    //             headerLeft: null
    //         }
    //     }
    // },

    {
        headerMode: 'screen',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#3e9ce9'
            },
            headerTitleStyle: {
                color:'#fff',
                fontSize: 20
            },
            headerTintColor: '#fff'
        }
    } 
) 

export default App;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#eeeeec',
      padding: 15,
      borderBottomColor: '#ddd',
      borderBottomWidth: 1,
  },
    title: {
        flex: 3,
        fontSize: 18,
        textAlign: 'left',
        color: '#aaaaaa',
    },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
    no_data:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100,
    }
});
