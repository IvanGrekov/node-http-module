import http from 'http';

const server = http.createServer((_, res) => {
	res.setHeader('Content-Type', 'text/plain');
	res.write('<h1>Hello, world!</h1>');
	res.write('<br />');
	res.write('<h2>123456</h2>');
	res.end();
});

server.listen(8080);

console.log('Server is running on http://localhost:8080/');
