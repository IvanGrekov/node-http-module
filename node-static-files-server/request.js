import axios from 'axios';
import { SERVER_URL } from './server.js';

export const sendRequest = () => {
    axios
        .get(SERVER_URL)
        .then((res) => {
            console.log('data:', res.data);
        })
        .catch((err) => {
            console.log('Error ocurred while executing request', err);
        });
};
