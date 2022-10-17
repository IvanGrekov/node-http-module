import http from 'http';
import fs from 'fs';

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    const { url } = req;
    let fileName = url.slice(1) || 'index.html';
    fileName = fileName.endsWith('.html') ? fileName : `${fileName}.html`;

    fs.readFile(`public/${fileName}`, 'utf8', (err, data) => {
        if (!err) {
            res.end(data);
        }

        fs.readFile('public/404.html', 'utf-8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error 500');
            }

            res.statusCode = 404;
            res.end(data);
        });
    });
});

server.listen(PORT, () => {
    console.log(`Server is rinning on http://localhost:${PORT}`);
});

export default server;
