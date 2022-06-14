import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api/index.js';


//ACTION CREATORS
export const getTabla = () => async (dispatch) =>{
    try {
        const { data } = await api.getTabla();
        dispatch({ type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error);
    }
}

