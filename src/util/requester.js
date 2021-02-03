import {BEGIN, END, ERROR} from "../constants/actionTypes";
import axios from "axios";

export const requester = (axiosConfig, type) => {
    return (dispatch, getState) => {
        dispatch({
            type: type + BEGIN
        });

        axios.request({...axiosConfig})
            .then(response =>
                dispatch({
                    type: type + END,
                    payload: response
                })
            )
            .catch(error =>
                dispatch({
                    type: type + ERROR,
                    payload: error
                })
            )
    }
};

