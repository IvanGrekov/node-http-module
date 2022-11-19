import http from 'http';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;

const options = {
    hostname: 'localhost',
    port: PORT,
    path: '/../../page.html',
};

http.get(options, (res) => {
    console.log(res.statusCode);

    res.setEncoding('utf-8');

    res.on('data', (data) => {
        console.log(data);
    });
});
