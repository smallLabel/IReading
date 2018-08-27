import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import moment from 'moment';
require("moment/locale/zh-cn");


const  ItemCell = ({article, onPressHandle})=>(
    <TouchableOpacity onPress={onPressHandle(article)}>
        <View style={styles.containerItem}>
            <Image style={styles.itemImage}/>
            <View style={styles.itemRightContent}>
                <Text style={styles.title}></Text>
                <View style={styles.itemRightBottom}>
                    <Text style={styles.userName}></Text>
                    <Text style={}></Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
);

const  styles = StyleSheet.create({
    containerItem:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fcfcfc',
        padding:10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    },
    title: {
        fontSize: 18,
        textAlign: 'left',
        color: 'black'
    },
    itemImage:{
        width:88,
        height: 65,
        marginRight: 10
    },
    itemRightContent: {
        flex:1,
    },
    itemRightBottom:{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    userName:{
        flex:1,
        fontSize: 14,
        color:'#87CEFA',
        marginTop: 5,
        marginRight: 5
    }
})

export  default  ItemCell;