import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';
import {Animated} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import {registerApp} from 'react-native-wechat'
import AV from 'leancloud-storage';
import deviceStorage from 'react-native-simple-store'

const maxWidth = Dimensions.get('window').width;
const maxHeight = Dimensions.get('window').height;
const splashImg = require('../img/splash.png');

export default class Splash extends Component {
    static navigationOption = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            bounceValue:new Animated.Value(1)
        };

        registerApp('wxb24c445773822c79');

        AV.initialize('Tfi1z7dN9sjMwSul8sYaTEvg-gzGzoHsz','57qmeEJonefntNqRe17dAgi4')
    }

    componentDidMount() {
        const {navigate} = this.props.navigation;
        Animated.timing(this.state.bounceValue, {
            toValue:1.2,
            duration: 1000
        }).start();

        //隐藏启动页 启动页在各端去设置
        SplashScreen.hide();

        this.timer = setTimeout(()=>{
            navigate('home',{});
            // deviceStorage.get('isInit').then((isInitialized)=>{
            //     if (!isInitialized) {
            //         // navigate('', {isFirst: true});
            //     } else {
            //
            //     }
            // })
        })

    }


    render() {
        return (
           <View style={{backgroundColor:'red'}}></View>
        );
    }
}