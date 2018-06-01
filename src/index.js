import React from 'react';
import './style/main.scss'
import ReactDOM from 'react-dom';
import App from './App';
import './module/rem'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
