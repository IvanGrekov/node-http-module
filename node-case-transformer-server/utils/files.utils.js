import fs from 'fs';
import { resolveFilePath } from './paths.utils.js';
import { convertToCase } from '../convertToCase/index.cjs';

export const readFile = (filePath) => {
    const result = {
        err: null,
        data: null,
    };

    return new Promise((resolve) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                result.err = err;
            } else {
                result.data = data;
            }

            resolve(result);
        });
    });
};

export const return500page = async (res) => {
    const { err, data } = readFile(resolveFilePath('500.html'));

    res.statusMessage = 'Internal Server Error';
    res.statusCode = 500;

    if (err) {
        console.log('Error while returning 500 page');
        res.end('Internal Server Error');
    } else {
        res.end(data);
    }
};

export const return400page = (res, payload) => {
    res.statusMessage = 'Bad request';
    res.statusCode = 400;
    res.end(JSON.stringify(payload, null, 4));
};

export const returnSuccessResult = ({ res, text, toCase }) => {
    const targetCase = toCase;
    const originalText = text;
    const { originalCase, convertedText } = convertToCase(originalText, targetCase);

    res.end(
        JSON.stringify({
            originalCase,
            targetCase,
            originalText,
            convertedText,
        }),
    );
};
