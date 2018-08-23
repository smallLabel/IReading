/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ListView} from 'react-native';
import {StackNavigator, TanNavigator} from 'react-navigation'


import RefreshListView from 'react-native-refresh-list-view'

import RequestService from '../service/RequestService';
import LoadingView from '../components/LoadingView';


var WEIXIN_ARTICLE_LIST = 'type=top&key=a73a76d1e4ab69c58fb383a631662617';

var Request = new  RequestService.SharedIntance();

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    // mixins: [React.addons.PureRenderMixin],
    //  旧版本写法
    // getInitialState: function() {
    //     return {
    //         dataSource = new ListView.DataSource({
    //             rowHasChanged: (r1, r2) => r1 !== r2,
    //         }),
    //
    //         loaded: false
    //     };
    // },

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds.cloneWithRows([]
                //暂时为空，等请求到数据后刷新state
            ),
            loaded: false,
        };
    }

    componentDidMount() {
        this.fecthData();
    }

    fecthData = () =>{
        Request.request(WEIXIN_ARTICLE_LIST,'get').then((article)=>{

            this.setState({
                dataSource : this.state.dataSource.cloneWithRows(article.result.data),
                loaded: true,
                ds: article.result.data
            })
        }).catch((error)=>{
            this.setState({
                laoded: true
            })
        })
    }

    render() {
        if (!this.state.loaded) {
            return <LoadingView/>
        }

        if (this.state.ds == undefined || this.state.ds.length == 0) {
            return (
                <View>
                    <Text style={styles.no_data}>没有数据</Text>
                </View>
            );
        }
      return (
          <ListView dataSource={this.state.dataSource}
                           renderRow={this.renderItem}
                           loadData={this.fecthData}
                           refreshDescription='freshing article'>
          </ListView>
      );
    }

    renderItem(article, sectionID, rowID){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    {article.title}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#eeeeec',
      padding: 15,
      borderBottomColor: '#ddd',
      borderBottomWidth: 1,
  },
    title: {
        flex: 3,
        fontSize: 18,
        textAlign: 'left',
        color: '#aaaaaa',
    },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
    no_data:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100,
    }
});
