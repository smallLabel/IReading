/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { composeWithDevTools } from 'redux-devtools-extension';
const middleware = composeWithDevTools({})(applyMiddleware(thunk, logger));

AppRegistry.registerComponent(appName, () => App);
