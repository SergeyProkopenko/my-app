import {requester} from "../util/requester";
import {BASE_URL, USERS} from "../constants/paths";
import {GET} from "../constants/requestMethods";
import {FETCH_USERS} from "../constants/actionTypes";

export const fetchUsers = () => {
    return requester(
        {
            url: BASE_URL + USERS,
            method: GET
        },
        FETCH_USERS
    );
};