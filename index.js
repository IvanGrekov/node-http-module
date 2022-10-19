(async () => {
    (await import('dotenv')).config();
    await import('./request-params.js');
    import('./send-request.js');
})();
