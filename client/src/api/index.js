import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:1010'});

export const getTabla = () => API.get('/submit/info')
export const sendData = (proyectInfo) => API.post('/submit/info', proyectInfo)
