import React,{Component} from 'react';
import {ListView, StyleSheet, RefreshControl} from 'react-native';

const ItemListView = ({dataSource, typeId, isRefreshing, onEndReached, onRefresh, renderItem, renderFooter})=>(
    <ListView
        initialListSize={1}
        dataSource={dataSource}
        renderRow={renderItem}
        style={styles.listView}
        onEndReached={()=>onEndReached(typeId)}
        onEndReachedThreshold={10}
        renderFooter={renderFooter}
        refreshControl={
            <RefreshControl
                refreshing={isRefreshing}
                style={styles.refreshControlBase}
                onRefresh={()=>onRefresh(typeId)}
                title="Loading..."
                colors={['#ffaa66cc', '#ff00ddff', '#ffffbb33', '#ffff4444']}
            />
        }
    ></ListView>
);

const styles = StyleSheet.create({
    listView:{
        backgroundColor: "#eeeeec"
    },
    refreshControlBase:{
        backgroundColor: "transparent"
    }
})