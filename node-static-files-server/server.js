import http from 'http';
import { return400page, returnFile } from './utils/files.utils.js';

const SERVER_PORT = 4000;
export const SERVER_URL = `http://localhost:${SERVER_PORT}`;
const URL_PREFIX = '/file';

const server = http.createServer((req, res) => {
    const requestUrl = req.url;

    if (!requestUrl.startsWith(URL_PREFIX)) {
        return400page(res);

        return;
    }

    const normalizedUrl = new URL(requestUrl.replace(URL_PREFIX, ''), SERVER_URL);
    const { pathname } = normalizedUrl;
    const normalizedPathname = pathname.replace('/', '');

    if (normalizedPathname === '') {
        returnFile('index.html', res);

        return;
    }

    returnFile(normalizedPathname, res);
});

export const launchServer = () => {
    server.listen(SERVER_PORT, () => {
        console.log(`Server is running on ${SERVER_URL}`);
    });
};
