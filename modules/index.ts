import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth from './auth';
import { authSaga } from './auth';

const rootReducer = combineReducers({ auth });

export function* rootSaga() {
	yield all([authSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
