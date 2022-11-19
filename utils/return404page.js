import fs from 'fs';

export const return404page = (res) => {
    fs.readFile('public/404.html', 'utf-8', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('Error 500');
            console.log('500 err');
        } else {
            res.statusCode = 404;
            res.end(data);
            console.log('404 err');
        }
    });
};
