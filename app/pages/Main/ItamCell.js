import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import moment from 'moment';
require("moment/locale/zh-cn");


const  ItemCell = ({article, onPressHandle})=>(
    <TouchableOpacity onPress={onPressHandle(article)}>
        <View>

        </View>
    </TouchableOpacity>
);