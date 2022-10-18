import http from 'http';

const PORT = process.env.PORT;

const options = {
    hostname: 'localhost',
    port: PORT,
    path: '/../index.js',
};

http.get(options, (res) => {
    console.log(res.statusCode);

    res.setEncoding('utf-8');

    res.on('data', (data) => {
        console.log(data);
    });
});
