import { takeLatest, call, put } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import { API_TYPES, CUSTOMER_TOKEN } from '../actionsTypes';
import * as API from '../../api/Auth';

function* signIn({ payload }) {
  try {
    yield put({ type: API_TYPES.SIGN_IN_LOADING });
    const token = yield call(API.signIn, payload);
    yield AsyncStorage.setItem(CUSTOMER_TOKEN, token);
    yield put({ type: API_TYPES.SIGN_IN_SUCCESS });
    yield put({ type: API_TYPES.CURRENT_USER_SUCCESS, payload: { token, } });
    // yield put({ type: API_TYPES.CURRENT_USER_REQUEST }); // Fetch details of current user
  } catch (error) {
    yield put({ type: API_TYPES.SIGN_IN_FAILURE, payload: { errorMessage: error.message } });
  }
}

function* signUp({ payload }) {
  try {
    yield put({ type: API_TYPES.SIGN_UP_LOADING });
    const response = yield call(API.signUp, payload);
    yield put({ type: API_TYPES.SIGN_UP_SUCCESS, response });
  } catch (error) {
    console.log(error);
    yield put({ type: API_TYPES.SIGN_UP_FAILURE, payload: { errorMessage: error.message } });
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(API_TYPES.SIGN_IN_REQUEST, signIn);
  yield takeLatest(API_TYPES.SIGN_UP_REQUEST, signUp);
}
