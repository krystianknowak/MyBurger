import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburger-backend.firebaseio.com/'
});

export default instance;