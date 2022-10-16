import http from 'http';

const req = http.request('http://localhost:3000', (res) => {
    console.log(res.statusCode);
    res.setEncoding('utf-8');

    res.on('data', (data) => {
        console.log(data);
    });
});

req.on('error', (err) => {
    console.error(err);
});

req.end();
