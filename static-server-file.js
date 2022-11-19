import http from 'http';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

import { checkIfPathIncludesExt } from './utils/checkIfPathIncludesExt.js';
import { return404page } from './utils/return404page.js';

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    const { url } = req;
    const fileName = url.slice(1) || 'index.html';
    let filePath = path.resolve(`public/${fileName}`);

    if (!checkIfPathIncludesExt(filePath)) {
        filePath += '.html';
    }

    console.log(filePath);

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            return404page(res);
        } else {
            res.end(data);
            console.log('data was sent');
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server is rinning on http://localhost:${PORT}`);
});

export default server;
