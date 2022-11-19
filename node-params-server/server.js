import http from 'http';

const SERVER_PORT = 3000;
export const SERVER_URL = `http://localhost:${SERVER_PORT}`;

const server = http.createServer((req, res) => {
    const url = new URL(req.url, SERVER_URL);
    const { pathname, searchParams } = url;

    const parts = pathname.slice(1).split('/');
    const query = Object.fromEntries(searchParams);

    const result = {
        parts,
        query,
    };

    res.end(JSON.stringify(result));
});

export const launchServer = () => {
    server.listen(SERVER_PORT, () => {
        console.log(`Server is running on ${SERVER_URL}`);
    });
};
