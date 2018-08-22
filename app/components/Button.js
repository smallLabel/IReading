import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ViewPropTypes} from 'react-native';

import PropTypes from 'prop-types'

const  propTypes = {
    onPress: PropTypes.func,
    disable:PropTypes.bool,
    text: PropTypes.string,
    containerStyle: ViewPropTypes.style,
    style: Text.propTypes.style
}

export class Button extends Component{
    constructor(props) {
        super(props);
        this.onPress = this.onPress();
    }

    onPress = ()=> {
        if (this.props.disabled) {
            return;
        }
        this.props.onPress();
    }

    render() {
        return (
            <TouchableOpacity style={this.props.containerStyle} onPress={this.onPress()}>
                <Text style={this.props.style}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        );
    }

}

Button.prototype = propTypes;
Button.defaultProps = {
    disable: false,
    onPress(){},
    activeOpacity: 0.8
}