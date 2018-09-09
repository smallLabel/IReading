import {put, take, call, fork} from 'redux-saga/effects'

import * as types from '../constants/ActionTypes'

import ToastUtil from '../Utils/ToastUtil'
import RequestUtil from '../Utils/UrlUtil'
import { WEXIN_ARTICLE_LIST } from '../constants/Urls';
import { fetchArticleList, receiveArticleList } from '../actions/read';

export  function* requestArticleList(
    isRefreshing,
    loading,
    typeId,
    isLoadMore,
    page
    ) {
    try {
        yield put(fetchArticleList(isRefreshing, loading, isLoadMore));
        const articleList = yield call(
            RequestUtil.request,
            `${WEXIN_ARTICLE_LIST}?typeId=${typeId}&page=${page}`,
            'get'
        );
        yield  put(receiveArticleList(
            articleList.showapi_res_body.pagebean.contentlist,
            typeId
        ));

        const  errorMessage = articleList.showapi_res_error;
        if (errorMessage && errorMessage !== '') {
            yield ToastUtil.showShort(errorMessage);
        }
    } catch (e) {
        yield put(receiveArticleList([], typeId));
        ToastUtil.showShort('网络发生错误，请重试')
    }
}