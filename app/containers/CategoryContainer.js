import React ,{ Component } from 'react';
import Category from '../pages/Category/Category';
import Ionicons from 'react-native-vector-icons/Ionicons'


export default class CategoryContainer extends Component {

    static navigationOptions = {
        title: '分类',
        tabBarIcon: <Ionicons name={'md-pricetags'} size={25} color='red'/>

    }

    render() {
        return (
            <Category>category</Category>
        );
    }
}