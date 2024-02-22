import axios from "axios";


export const publicAPI = axios.create({baseURL: 'http://192.168.1.18:5000/api'});