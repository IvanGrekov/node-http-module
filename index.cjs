(async () => {
	require('dotenv').config();

	const script = await import('./nodemon-and-custom_port.js');
})();
