import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux';
import createRootReducer from './store/reducer/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Container } from './hoc';
import {routerMiddleware} from 'connected-react-router';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import {ConnectedRouter} from 'connected-react-router';

//Manual Middle Ware code
// const logger = store => {
//     return next => {
//         return action => {
//             console.log("Middleware Dispacting", action);
//             const result = next(action);
//             console.log("Middle ware next state", store.getState());
//             return result;
//         }
//     }
// }
export const history = createBrowserHistory()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
  );



const app = (
    <Provider store={store}>
              <ConnectedRouter history={history}>
            <Container></Container>
        </ConnectedRouter>
    </Provider>
);


axios.interceptors.request.use((requestConfig) => {
    console.log(requestConfig);
    return requestConfig;

}, (error) => {
    console.log(error);
    return Promise.reject(error);
});


axios.interceptors.response.use((response) => {
    console.log(response);
    return response;

}, (error) => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
