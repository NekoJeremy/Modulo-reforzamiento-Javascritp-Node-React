const restify = require('restify');

const server = restify.createServer();

server.listen(8080, () => {
    console.log('Server running on port', 8080);
})