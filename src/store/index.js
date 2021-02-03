import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from '../reducers'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import {logger} from "../middlewares/logger";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

window.store = store;

export default store;