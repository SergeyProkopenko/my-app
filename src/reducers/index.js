import {combineReducers} from "redux";
import {counterReducer} from "./counter";
import {articlesReducer} from "./articlesReducer";

const appReducer = combineReducers({
    counter: counterReducer,
    articles: articlesReducer
});

export const rootReducer = (state, action) => {
    return appReducer(state, action);
};

