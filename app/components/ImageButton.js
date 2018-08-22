import React, {Component} from 'react-native'
import {Image, StyleSheet, TouchableOpacity, ViewPropTypes, View} from 'react-native'
import propTypes from 'prop-types'

const PropTypes = {
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    source: PropTypes.object,
    style: ViewPropTypes.style,
    containerStyle: ViewPropTypes.style,
}

export default class ImageButton extends Component{
    constructor(props) {
        super(props);
        this.onPress = this.onPress();
    }

    onPress = () => {
        if (!this.props.disabled) {
            return;
        }
        this.props.onPress();
    }

    render(){
        return (
            <View></View>
        )
    }
}