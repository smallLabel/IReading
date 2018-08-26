'use strict';

import React , {Component} from 'react';
import {StyleSheet, Text, View, ActivityIndicator } from 'react-native';


export default class LoadingView extends Component {
    render(){
        <View>
            <ActivityIndicator size='large' color='#3e9ce9'/>
            <Text styles={styles.loadingText}>数据加载中...</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    loading:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    loadingText:{
        marginTop: 10,
        textAlign: 'center'
    }
})