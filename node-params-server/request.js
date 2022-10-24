import axios from 'axios';
import { SERVER_URL } from './server.js';

export const sendRequest = () => {
    axios
        .get(`${SERVER_URL}/hello/world/123?x=1&search=some`)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(`Error ocurred, ${err}`);
        });
};
