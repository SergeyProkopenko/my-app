import {articles as defaultArticles} from "../fixtures";
import {DELETE_ARTICLE} from "../actionTypes/counterTypes";

export const articlesReducer = (articleState = defaultArticles, action) => {
    switch (action.type) {
        case DELETE_ARTICLE:
            return articleState.filter(article => article.id !== action.payload.id);

    }

    return articleState;
};

