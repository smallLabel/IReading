import  React, {Component} from 'react';
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


export default class Feedback extends Component {

    static navigationOptions = {
        title: '建议',
        tabBarIcon: <Icon name={'md-thumbs-up'} size={25} color='red'/>
    }

    render() {
      return (
        <View style={{backgroundColor:'red'}}></View>
      )
    };
}