const express = require("express");
const app = express();



app.get("/", function(req, res) {
    res.send("<h1>Servidor rodando com ExpressJS</h1>");
});

http.createServer(express).listen(8080, () => console.log("Servidor rodando local na porta 3001"));