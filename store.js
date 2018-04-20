import {
    applyMiddleware,
    createStore,
} from 'redux';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import logger from 'redux-logger';
import reducers from './src/modules/reducers';

const navigationMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav,
);

const store = createStore(
    reducers,
    applyMiddleware(logger, navigationMiddleware),
);

export default store;
