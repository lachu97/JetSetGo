import {configureStore} from '@reduxjs/toolkit';
import appReducer from './AppReducer';
import createSagaMiddleware from 'redux-saga';
import reactotron from 'reactotron-react-native';
import AppReactotron from '../Dev/ReactotronConfig';
import {rootSaga} from './AppSaga';
const sagaMonitor = reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({sagaMonitor});
const rootReducer = {
  home: appReducer,
};
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
  devTools: true, // <- Comment while Taking Build
  enhancers: getDefaultEnhancers =>
    getDefaultEnhancers().concat([AppReactotron.createEnhancer()]),
});
sagaMiddleware.run(rootSaga);

export default store;
