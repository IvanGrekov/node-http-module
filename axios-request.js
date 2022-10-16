import axios from 'axios';

axios
    .get('http://localhost:3000')
    .then((res) => {
        console.log(res.status);
        console.log(res.data);
    })
    .catch((err) => {
        console.error(err);
    });
