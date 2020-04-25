import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://covid19.mathdro.id/api'
});

instance.interceptors.response.use(response => {
    return !!(response.data)? response.data : response;
});

export default instance;