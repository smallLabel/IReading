import React ,{ Component } from 'react';
import Main from '../pages/Main/Main';
import Ionicons from 'react-native-vector-icons/Ionicons'


export default class MainContainer extends Component {
    static navigationOptions = {
        title: '首页',
        // tabBarIcon: ({tintColor})=> {
        //     <Ionicons name={'md-home'} size={25} color={tintColor}/>
        // },
        tabBarIcon: <Ionicons name={'md-home'} size={25} color='red'/>
    }

    render() {
        return (
            <Main>main</Main>
        );
    }
}