import http from 'http';

const PORT = process.env.PORT;
const path = `http://localhost:${PORT}`;

const server = http.createServer((req, res) => {
    const url = new URL(req.url, path); // NOTE: or `http://${req.headers.host}`
    const searchParams = url.searchParams;

    // console.log(searchParams.entries());
    // console.log(Object.fromEntries(searchParams.entries()));

    res.end('Hello, world');
});

server.listen(PORT, () => {
    console.log(`server is running on ${path}`);
});
