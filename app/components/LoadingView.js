'use strict';

import React , {Component} from 'react';
import {StyleSheet, Text, View, Platform, ProgressBarAndroid, ProgressViewIOS} from 'react-native';


export default class LoadingView extends Component {
    render(){
        if (Platform.OS === 'android') {
            return (
                <View style={styles.loading}>
                    <ProgressBarAndroid styleAttr='LargeInverse' color='#3e9ce9' />
                    <Text style={styles.loadingText}>数据加载中...</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.loading}>
                    <ProgressViewIOS progress={1} ></ProgressViewIOS>
                    <Text style={styles.loadingText}>数据加载中</Text>
                </View>
            );
        }

    }
}

const styles = StyleSheet.create({
    loading:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingText:{
        marginTop: 10,
        textAlign: 'center'
    }
})