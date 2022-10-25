import fs from 'fs/promises';
import { resolvePath, checkIfPathIncludesExt } from './path.utils.js';

export const readFile = async (filePath) => {
    const result = {
        data: null,
        err: null,
    };

    await fs
        .readFile(filePath, 'utf-8')
        .then((data) => {
            result.data = data;
        })
        .catch((err) => {
            result.err = err;
        });

    return result;
};

export const return400page = async (res) => {
    const filePath = resolvePath('400.html');
    const { data, err } = await readFile(filePath);

    if (err) {
        console.log('err while returning 400 page', err);
        return500page(res);
    } else {
        res.statusCode = 400;
        res.end(data);
    }
};

export const return404page = async (res) => {
    const filePath = resolvePath('404.html');
    const { data, err } = await readFile(filePath);

    if (err) {
        console.log('err while returning 404 page', err);
        return500page(res);
    } else {
        res.statusCode = 404;
        res.end(data);
    }
};

export const return500page = async (res) => {
    const filePath = resolvePath('500.html');
    const { data, err } = await readFile(filePath);

    res.statusCode = 500;

    if (err) {
        console.log('err while returning 500 page', err);
        res.end('Oops, 500! Internal Server Error');
    } else {
        res.end(data);
    }
};

export const returnFile = async (fileName, res) => {
    const normalizedFileName = checkIfPathIncludesExt(fileName) ? fileName : `${fileName}.html`;
    const filePath = resolvePath(normalizedFileName);
    const { data, err } = await readFile(filePath);

    if (err) {
        console.log('err while returning file', err);
        return404page(res);
    } else {
        res.statusCode = 200;
        res.end(data);
    }
};
