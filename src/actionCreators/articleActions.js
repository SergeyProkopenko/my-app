import {DELETE_ARTICLE} from "../actionTypes/counterTypes";

export const deleteArticle = (id) => {
    return {
        type: DELETE_ARTICLE,
        payload: {id}
    }
};