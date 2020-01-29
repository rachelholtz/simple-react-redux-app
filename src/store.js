import {createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory as createHistory } from 'history';
import { routerMiddleware } from 'react-router-redux'

//import the route reducer
import rootReducer from './reducers/index';

// import store data
import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
  posts,
  comments
};

const history = createHistory()

const middleware = routerMiddleware(history)
// running redux dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, defaultState, composeEnhancers(applyMiddleware(middleware)))

export {history}
export default store;