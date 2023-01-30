const http = require('http');

const routes = require('./route2');
console.log(routes.some_text);
const server = http.createServer(routes);
server.listen(3000);