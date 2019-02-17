"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var Db = /** @class */ (function () {
    function Db() {
        this.mongoUrl = "mongodb://testPortal:rjrahul123@ds133275.mlab.com:33275/testportal";
    }
    Db.prototype.connectMongooseServer = function () {
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true })
            .then(function () {
            console.log('mongo server connected');
        })
            .catch(function (error) {
            console.log(error);
            console.log('mongo server connection failed');
        });
    };
    return Db;
}());
exports.Db = Db;
