import { createAction, handleActions } from 'redux-actions';
import { put, takeLatest } from 'redux-saga/effects';

const SET_AUTH = 'auth/SET_AUTH';
const REQUEST_AUTH = 'auth/REQUEST_AUTH';
const REVOKE_AUTH = 'auth/REVOKE_AUTH';

const setAuth = createAction(SET_AUTH);
export const requestAuth = createAction(REQUEST_AUTH, ({ authToken }: AuthPayloadType) => ({
	authToken,
}));
export const revokeAuth = createAction(REVOKE_AUTH);

function* requestAuthSaga(action: AuthActionType): Generator<any> {
	const authToken = action.payload.authToken;
	sessionStorage.setItem('authToken', authToken);
	yield put(setAuth(action.payload));
}

function* revokeAuthSaga() {
	sessionStorage.removeItem('authToken');
	yield put(setAuth({ authToken: '' }));
}

export function* authSaga() {
	yield takeLatest(REQUEST_AUTH, requestAuthSaga);
	yield takeLatest(REVOKE_AUTH, revokeAuthSaga);
}

const initialState: AuthPayloadType = {
	authToken: '',
};

const auth = handleActions(
	{
		[SET_AUTH]: (state, action) => ({ authToken: action.payload.authToken }),
	},
	initialState,
);

export default auth;
