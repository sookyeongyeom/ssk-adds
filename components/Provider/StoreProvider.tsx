import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from '../../modules';
import AuthController from './AuthController';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const enhancer =
	process.env.NODE_ENV === 'production'
		? composeWithDevTools(applyMiddleware(sagaMiddleware))
		: composeWithDevTools(applyMiddleware(logger, sagaMiddleware));

export const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);

export default function StoreProvider({ children }: ChildrenType) {
	return (
		<Provider store={store}>
			<AuthController />
			{children}
		</Provider>
	);
}
