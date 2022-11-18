import http from 'http';
import dotenv from 'dotenv';
dotenv.config();

const request = http.request(`http://localhost:${process.env.PORT}/some-path`, (res) => {
    console.log('status code', res.statusCode);

    res.setEncoding('utf-8');

    res.on('data', (chunk) => {
        console.log('chunk', chunk);
    });
});

request.on('error', (err) => {
    console.log('err', err.message);
});

request.end();
