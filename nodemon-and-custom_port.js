import http from 'http';

const server = http.createServer((req, res) => {
    res.write('Hello, world!');

    res.end();
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default server;
