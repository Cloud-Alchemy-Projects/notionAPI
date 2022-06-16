import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export default (tabla = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
            break;
        case CREATE:
            return [...tabla, action.payload];
            break;
        default:
            return tabla;
    }
};