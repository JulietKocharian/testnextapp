import axios from "axios";


export const publicAPI = axios.create({baseURL: 'http://192.168.137.168:5000/api'});
