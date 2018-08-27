

import {NavigationActions} from 'react-navigation';
const reset = (navigation, routeName)=>{
    const resetAction = NavigationActions.resetTo({
        index: 0,
        actions: [NavigationActions.navigate({routeName})]
    });
    navigation.dispatch(resetAction);
};

export default {
    reset
};