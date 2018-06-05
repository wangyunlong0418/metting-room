import React from 'react';
import ReactDOM from 'react-dom';
import {
    Provider
} from 'react-redux';
// import {IntlProvider, addLocaleData} from 'react-intl';

import Routers from './router';
import configureStore from './redux/store';

const store = configureStore();

ReactDOM.render(
    <Provider store = {store} > 
        {Routers} 
    </Provider>,
    document.getElementById('root')
);
