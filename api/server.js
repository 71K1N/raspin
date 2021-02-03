//  -    importa o servidor HTTP
const http = require("http");
const app = require("./app");

//const port = process.env.PORT || 8081;
const port = 8080;

//  -    intancia o servidor
const server = http.createServer(app);

//  -   definie onde o servidor vai excutar (porta)
server.listen(port);