import {BEGIN, END, ERROR, FETCH_USERS} from "../constants/actionTypes";
import {replaceIdToKey} from "../util/helpers";

const initialState = {
    data: [],
    pagination: {},
    isLoading: false,
    error: null
};

export const userReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case FETCH_USERS + BEGIN:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_USERS + END:
            return {
                ...state,
                isLoading: false,
                data: replaceIdToKey(payload.data),
                pagination: payload.pagination
               };
        case FETCH_USERS + ERROR:
            return {
                ...state,
                isLoading: false,
                error: payload
            };
        default:
            return {
                ...state
            }
    }
};