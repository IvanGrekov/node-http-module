import axios from 'axios';
import https from 'https';

//#region axios
// axios
//     .get('https://mate.academy/students-api/goods/125')
//     .then((res) => {
//         console.log(res.data);
//     })
//     .catch((error) => console.log('error', error.response.data));
//#endregion

//#region https module
// const request = https.request('https://mate.academy/students-api/goods/125', (res) => {
//     res.setEncoding('utf-8');

//     res.on('data', (data) => {
//         console.log(JSON.parse(data, null, 4));
//     });
// });

// request.on('error', (err) => {
//     console.log(err);
// });

// request.end();
//#endregion

//#region https module for http endpoint
// const request = https.request('http://localhost:3000', (res) => {
//     res.setEncoding('utf-8');

//     res.on('data', (data) => {
//         console.log(JSON.parse(data, null, 4));
//     });
// });

// request.on('error', (err) => {
//     console.log(err);
// });

// request.end();
//#endregion
