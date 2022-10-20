import axios from 'axios';

const PORT = process.env.PORT;

// axios.interceptors.response.use(
//     (value) => {
//         console.log('value from interceptor', value);

//         return value;
//     },
//     (error) => {
//         console.log('error from interceptor', error);

//         throw error;
//     },
// );

axios
    .get(`http://localhost:${PORT}/index?pageNumber=1&age=20&age=21`)
    .then((res) => console.log('data', res.data))
    .catch(() => console.error('Error occurred'));
