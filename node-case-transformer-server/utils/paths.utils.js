import path from 'path';

export const resolveFilePath = (fileName) =>
    path.resolve(`./node-case-transformer-server/public/${fileName}`);
