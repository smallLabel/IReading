import  React, {Component} from 'react';
import { View, StyleSheet } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";

export default class About extends Component {
    static navigationOptions = {
        title: '关于',
        tabBarIcon: <Icon name={'md-home'} size={25} color='red'/>
    }


    render() {
      return (
        <View style={{backgroundColor:'red'}}></View>
      )
    };
}