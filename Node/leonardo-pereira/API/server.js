const restify = require("restify");
const server = restify.createServer();

server.listen(8080, function() {
  console.log("servidor corriendo en el puerto : 8080");
});