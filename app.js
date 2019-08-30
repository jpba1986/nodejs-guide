const http = require('http');

const routes = require('./routes');

console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(3000);




/* "start-server": "node app.js" // npm run start-server */