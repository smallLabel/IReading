import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    RefreshControl,
    ScrollView
} from 'react-native';


const EmptyView = ({read, typeId, onRefresh})=> (
    <ScrollView automaticallyAdjustContentInsets={false}
                horizontal={false}
                style={styles.base}
                contentContainerStyle={styles.no_data}
                RefreshControl={
                    <RefreshControl
                        refreshing={read.isRefreshing}
                        onRefresh={()=>onRefresh(typeId)}
                        title="loading..."
                        colors={['#ffaa66cc', '#ff00ddff', '#ffffbb33', '#ffff4444']}
                        style={styles.refreshControlBase}
                    />
                }
    >
            <View style={{alignItems: 'center' }}>
                <Text style={{fontSize: 16}}>目前没有数据，请刷新重试……</Text>
            </View>
    </ScrollView>
)

const styles = StyleSheet.create({
    base:{
        flex:1
    },
    no_data: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100
    },
    refreshControlBase: {
        backgroundColor: 'transparent'
    }
})

export default EmptyView;