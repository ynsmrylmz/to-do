import { applyMiddleware, compose, createStore } from 'redux';
// middlewares
import createSagaMiddleware from 'redux-saga';
// Import reducers
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';




const sagaMiddleware = createSagaMiddleware()
const composeSetup = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
const _rootReducer = rootReducer
/**
 * Create a Redux store that holds the app state.
 */
const store = createStore(
    _rootReducer,
    composeSetup(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store;