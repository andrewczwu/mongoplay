var http = require("http");
var express = require("express");
var app = express();

var controllers = require("./controllers");

app.set("view engine", "vash");

app.use(express.static(__dirname + "/public"));

controllers.init(app);

app.get("/api/users", function (req, res) {
   res.set("Content-Type", "application/json");
   res.send({name: "Andrew", isValid: true}); 
});

var server = http.createServer(app);

server.listen(3000);

