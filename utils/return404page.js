import fs from 'fs';

export const return404page = (res) => {
    fs.readFile('public/404.html', 'utf-8', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('Error 500');
        }

        res.statusCode = 404;
        res.end(data);
    });
};
