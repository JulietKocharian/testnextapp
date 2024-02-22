import axios from "axios";


export const publicAPI = axios.create({baseURL: 'https://api.publicapis.org'});