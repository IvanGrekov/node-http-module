(async () => {
    (await import('dotenv')).config();
    await import('./protected-static-files-server.js');
    import('./break-safety-request.js');
})();
