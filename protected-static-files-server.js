import http from 'http';
import fs from 'fs';

import { getNormalizedUrl } from './utils/getNormalizedUrl.js';
import { checkIfPathIncludesExt } from './utils/checkIfPathIncludesExt.js';
import { return404page } from './utils/return404page.js';

const server = http.createServer((req, res) => {
    const {
        url,
        headers: { host },
    } = req;

    const normalizedUrl = getNormalizedUrl(url, `http://${host}`);
    const { pathname } = normalizedUrl;

    // if (url.startsWith('/..')) {
    //     return404page(res);
    // }

    let fileName = pathname.slice(1) || 'index.html';
    fileName = checkIfPathIncludesExt(fileName) ? fileName : `${fileName}.html`;

    fs.readFile(`public/${fileName}`, 'utf8', (err, data) => {
        if (!err) {
            res.end(data);
        }

        return404page(res);
    });
});

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`Server is rinning on http://localhost:${PORT}`);
});

export default server;
