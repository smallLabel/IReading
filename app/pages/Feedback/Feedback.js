import  React, {Component} from 'react';
import { View } from 'react-native'

export default class Feedback extends Comment {
    render() {
      return (
        <View style={{backgroundColor:'red'}}></View>
      )
    };
}