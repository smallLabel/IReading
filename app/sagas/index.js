import {all, fork} from 'redux-saga/effects'

import {watchRequestArticleList} from './read'

export default function *rootSaga() {
    yield all([fork(watchRequestArticleList)]);
}