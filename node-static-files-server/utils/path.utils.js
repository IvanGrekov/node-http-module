import path from 'path';

export const checkIfPathIncludesExt = (path) => {
    const regExp = new RegExp(/\.\w+$/);

    return regExp.test(path);
};

export const resolvePath = (fileName) => {
    return path.resolve(`./node-static-files-server/public/${fileName}`);
};
