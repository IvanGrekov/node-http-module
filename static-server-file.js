import http from 'http';
import fs from 'fs';

import { checkIfPathIncludesExt } from './utils/checkIfPathIncludesExt.js';
import { return404page } from './utils/return404page.js';

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    const { url } = req;

    let fileName = url.slice(1) || 'index.html';
    fileName = checkIfPathIncludesExt(fileName) ? fileName : `${fileName}.html`;

    fs.readFile(`public/${fileName}`, 'utf8', (err, data) => {
        if (!err) {
            res.end(data);
        }

        return404page(res);
    });
});

server.listen(PORT, () => {
    console.log(`Server is rinning on http://localhost:${PORT}`);
});

export default server;
