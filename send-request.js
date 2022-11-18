import axios from 'axios';

const PORT = process.env.PORT;

// axios.interceptors.response.use(
//     (value) => {
//         console.log('value from interceptor');

//         return value;
//     },
//     (error) => {
//         console.log('error from interceptor');

//         throw error;
//     },
// );

// export const api = axios.create({
//     baseURL: 'https://gorest.co.in/public-api',
// });

// const checkTokenInterceptor = (config) => {
//     const token = localStorage.getItem('token');

//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
// };

// const responseSuccessInterceptor = (response) => {
//     const data = response.data;

//     if (!data._meta.success) {
//         return { error: data.result };
//     }

//     return { response: data };
// };

// const networkErrorInterceptor = (error) => {
//     const responseError = error?.response?.data;

//     return { error: responseError || error };
// };

api.interceptors.request.use(checkTokenInterceptor);
api.interceptors.response.use(responseSuccessInterceptor, networkErrorInterceptor);

axios
    .get(`http://localhosst:${PORT}/index?pageNumber=1&age=20&age=21`)
    .then((res) => console.log('data', res.data))
    .catch(() => console.error('Error occurred'));
