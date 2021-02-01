import {combineReducers} from "redux";
import {counterReducer} from "./counter";

const appReducer = combineReducers({
    counter: counterReducer
});

export const rootReducer = (state, action) => {
    return appReducer(state, action);
};

