import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export default (tablas = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
            break;
        default:
            return tablas;
    }
};