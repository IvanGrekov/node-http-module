import http from 'http';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;
const path = `http://localhost:${PORT}`;

const server = http.createServer((req, res) => {
    const {
        url,
        headers: { host },
    } = req;
    const normalizedUrl = new URL(url, `http://${host}`);
    const { searchParams } = normalizedUrl;

    console.log(searchParams.age);
    console.log(searchParams.get('age'));
    console.log(searchParams.getAll('age'));
    console.log('searchParams', Object.fromEntries(searchParams));

    res.end('Hello, world');
});

server.listen(PORT, () => {
    console.log(`server is running on ${path}`);
});
