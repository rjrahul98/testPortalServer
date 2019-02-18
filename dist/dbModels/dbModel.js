"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var questionSchema_1 = require("./questionSchema");
var userSchema_1 = require("./userSchema");
var testSchema_1 = require("./testSchema");
var companySchema_1 = require("./companySchema");
var DbModel = /** @class */ (function () {
    function DbModel() {
    }
    DbModel.UserModel = mongoose.model('user', userSchema_1.UserSchema);
    DbModel.TestModel = mongoose.model('test', testSchema_1.TestSchema);
    DbModel.CompanyModel = mongoose.model('company', companySchema_1.CompanySchema);
    DbModel.QuestionModel = mongoose.model('question', questionSchema_1.QuestionSchema);
    return DbModel;
}());
exports.DbModel = DbModel;
