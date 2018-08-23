/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ListView} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import MainContainer from '../containers/MainContainer';
import CategoryContainer from '../containers/CategoryContainer'
import About from '../pages/About/About';
import Feenback from '../pages/Feedback/Feedback';
import Splash from '../pages/Splash'

import RefreshListView from 'react-native-refresh-list-view'
import RequestService from '../service/RequestService';
import LoadingView from '../components/LoadingView';

var WEIXIN_ARTICLE_LIST = 'type=top&key=a73a76d1e4ab69c58fb383a631662617';
var Request = new  RequestService.SharedIntance();

const TabContainer = TabNavigator(
    {
        Main: {screen: MainContainer},
        Category: {screen: CategoryContainer},
        Feenback: {screen: Feedback},
        About: {screen: About}
    }, 
    {
        lazy: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#3e9ce9',
            inactiveBackgroundColor: '#999999',
            showIcon: true,
            style:{
                backgroundColor: '#fff'
            },
            indicatorStyle:{
                opacity: 0
            },
            tabStyle:{
                padding:0
            }
        }
    }
)

const App = StackNavigator(
    {
    Splash: {screen: Splash},
    Category: {
        screen: CategoryContainer,
    }
    },
    {
        headerMode: 'screen',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#3e9ce9'
            },
            headerTitleStyle: {
                color:'#fff',
                fontSize: '20'
            },
            headerTintColor: '#fff'
        }
    } 
) 

export default App;

// export default class App extends Component<Props> {

    // constructor(props) {
    //     super(props);
    //     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    //     this.state = {
    //         dataSource: ds.cloneWithRows([]
    //             //暂时为空，等请求到数据后刷新state
    //         ),
    //         loaded: false,
    //     };
    // }

    // componentDidMount() {
    //     this.fecthData();
    // }

    // fecthData = () =>{
    //     Request.request(WEIXIN_ARTICLE_LIST,'get').then((article)=>{

    //         this.setState({
    //             dataSource : this.state.dataSource.cloneWithRows(article.result.data),
    //             loaded: true,
    //             ds: article.result.data
    //         })
    //     }).catch((error)=>{
    //         this.setState({
    //             laoded: true
    //         })
    //     })
    // }

    // render() {
    //     if (!this.state.loaded) {
    //         return <LoadingView/>
    //     }

    //     if (this.state.ds == undefined || this.state.ds.length == 0) {
    //         return (
    //             <View>
    //                 <Text style={styles.no_data}>没有数据</Text>
    //             </View>
    //         );
    //     }
    //   return (
    //       <ListView dataSource={this.state.dataSource}
    //                        renderRow={this.renderItem}
    //                        loadData={this.fecthData}
    //                        refreshDescription='freshing article'>
    //       </ListView>
    //   );
    // }

    // renderItem(article, sectionID, rowID){
    //     return(
    //         <View style={styles.container}>
    //             <Text style={styles.title}>
    //                 {article.title}
    //             </Text>
    //         </View>
    //     )
    // }
// }

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
