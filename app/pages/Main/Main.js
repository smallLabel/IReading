import React, {Component} from 'react';
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
import ItemCell from './ItemCell'
import Footer from './FooterView'
import ItemListView from './ItemListView'
import EmptyView from './EmptyView'

import store from 'react-native-simple-store'

const propTypes = {
    readActions: PropTypes.object,
    read: PropTypes.object.isRequired
}

const pages = [];
let loadMoreTime = 0;
let currentLoadMoreTypeId;


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
        DeviceEventEmitter.addListener('changeCategory', (typeIds) => {
            typeIds.forEach((typeId) => {
                readActions.requestArticleList(false, true, typeId);
                pages.push(1);
            });
            this.setState({
                typeIds
            });
        });
        InteractionManager.runAfterInteractions(() => {
            store.get('typeIds').then((typeIds) => {
                if (!typeIds) {
                    return;
                }
                typeIds.forEach((typeId) => {
                    readActions.requestArticleList(false, true, typeId);
                    pages.push(1);
                });
                store.get('typeList').then((typeList) =>
                    this.setState({
                        typeIds,
                        typeList
                    })
                )
            })
        })
    }

    componentWillReceiveProps(nextProps) {
        const {read} = this.props;
        if (
            read.isLoadMore
            && !nextProps.read.isLoadMore
            && !nextProps.read.isRefreshing) {

            if (nextProps.read.noMore) {
                ToastUtil.showShort('没有更多数据了');
                const index = this.state.typeIds.indexOf(currentLoadMoreTypeId);
                if (index >= 0) {
                    pages[index] -= 1;
                }
            }
        }
    }


    componentWillUnmount() {
        DeviceEventEmitter.removeAllListeners('changeCategory');
    }

    onRefresh = (typeId) => {
        const {readActions} = this.props;
        readActions.requestArticleList(true, false, typeId);
        const index = this.state.typeIds.indexOf(typeId);
        if (index >= 0) {
            pages[index] = 1;
        }
    }


    render() {
        const {read} = this.props;
        const content = this.state.typeIds.map((typeId) => {
            if (this.state.typeList === null) {
                return null;
            }
            // const name = getTypeName(this.state.typeList, typeId);
            return (
                <View>
                    hello
                </View>
            )
        });


        return (
            <View style={{backgroundColor: 'red'}}></View>
        )
    };
}