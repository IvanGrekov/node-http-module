import axios from 'axios';

axios
    .get('http://localhost:3000')
    .then((res) => {
        console.log('status', res.status);
        console.log('data', res.data);
    })
    .catch((err) => {
        console.error('err', err);
    });
