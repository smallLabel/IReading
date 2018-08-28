import  React, {Component} from 'react';
import PropTypes from 'prop-types'
import {
    View,
    StyleSheet,
    DeviceEventEmitter,//监听事件
    InteractionManager,//用来执行耗时较长任务，不会阻塞当前执行的动画等效果
    ListView
} from 'react-native'

import ScrollTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import {SafeAreaView} from 'react-navigation';
import LoadingView from '../../components/LoadingView';
import ToastUtil from '../../Utils/ToastUtil'
import ItemCell from 'ItemCell'
import Footer from 'FooterView'
import ItemListView from 'ItemListView'
import EmptyView from 'EmptyView'


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeIds: [],
            typeList: {}
        };
    }

    componentDidMount() {
        const {readActions} = this.props;
        DeviceEventEmitter.addListener('changeCategory', (typeIds)=> {
            typeIds.forEach((typeId)=>{
                readActions.requestArticleList(false, true, typeId);
                pages.push(1);
            })
        })
    }


    render() {
      return (
        <View style={{backgroundColor:'red'}}></View>
      )
    };
}