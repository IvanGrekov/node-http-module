import { URL } from 'url';

export const getNormalizedUrl = (url, host) => {
    return new URL(url, host);
};
