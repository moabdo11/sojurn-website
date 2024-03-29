import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/Reducers/rootReducer';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import  { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './firebase/fbConfig';

const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase })),
        reactReduxFirebase(fbConfig, {attachAuthIsReady: true}),
        )
    );

    store.firebaseAuthIsReady.then(() =>{

        ReactDOM.render( 
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                 </BrowserRouter>
            </Provider>,
            document.getElementById('root')
        );

    })



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
