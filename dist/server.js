"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var bodyParser = require('body-parser');
var DB_1 = require("./DB");
var routes_1 = require("./routes");
exports.app = express();
var dbClient = new DB_1.Db();
dbClient.connectMongooseServer();
exports.app.use(bodyParser.json());
exports.app.use(bodyParser.urlencoded({ extended: false }));
routes_1.configRoutes(exports.app);
var port = 4000;
exports.app.listen(port, function () {
    console.log("server is running on port " + port);
});
