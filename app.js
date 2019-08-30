const http = require('http');

const routes = require('./routes');

// 1
//const server = http.createServer(routes);

// 2

console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(3000);
