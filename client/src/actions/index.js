import { FETCH_ALL, CREATE } from '../constants/actionTypes';
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

export const sendData = (proyectInfo) => async (dispatch) =>{
    try {
        const { data } = await api.sendData(proyectInfo);
        dispatch({ type: CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

