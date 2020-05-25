import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './_helpers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './favicon.ico';
import App from './App';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('root')
);
