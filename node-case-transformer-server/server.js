import http from 'http';
import { return400page, returnSuccessResult } from './utils/files.utils.js';
import { CASES } from './constants.js';

const PORT = 3000;
const SERVER_URL = `http://localhost:${PORT}`;
const caseOptions = Object.values(CASES);

const getErrorPayload = (message) => ({
    errors: [
        {
            message,
        },
    ],
});

const server = http.createServer((req, res) => {
    const url = new URL(req.url, SERVER_URL);
    const { pathname, searchParams } = url;
    const toCase = searchParams.get('toCase');

    if (pathname === '/') {
        return400page(
            res,
            getErrorPayload(
                'Text to convert is required. Correct request is: "/<TEXT_TO_CONVERT>?toCase=<CASE_NAME>".',
            ),
        );

        return;
    }

    if (!toCase) {
        return400page(
            res,
            getErrorPayload(
                '"toCase" query param is required. Correct request is: "/<TEXT_TO_CONVERT>?toCase=<CASE_NAME>".',
            ),
        );

        return;
    }

    if (!caseOptions.includes(toCase)) {
        return400page(
            res,
            getErrorPayload(
                `This case is not supported. Available cases: ${caseOptions.join(', ')}.`,
            ),
        );

        return;
    }

    returnSuccessResult({
        res,
        text: pathname.slice(1),
        toCase,
    });
});

export const createServer = () => {
    server.listen(PORT, () => {
        console.log(`Server is running on ${SERVER_URL}`);
    });
};
