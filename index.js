(async () => {
    (await import('dotenv')).config();
    import('./static-server-file.js');
})();
