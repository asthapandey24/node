const http = require('http');

const routes = require('./route2');
console.log(routes.some_text);
const server = http.createServer(routes.handler);
server.listen(3000);

// jo package.json me start_server k naam se hai usko terminal pe execute karane k liye hm use karengay npm run start_server