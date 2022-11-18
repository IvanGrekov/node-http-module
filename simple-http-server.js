import http from 'http';
import dotenv from 'dotenv';
dotenv.config();

const server = http.createServer((req, res) => {
    console.log('req.url', `"${req.url}"`);

    // NOTE: we should set headers before writing the res
    res.setHeader('Content-Type', 'text/html');

    res.write('<h1>Hello</h1>');
    res.write('<br />');
    res.write('<h2>World</h2>');
    res.end();
});

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});
