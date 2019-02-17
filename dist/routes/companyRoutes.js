"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var companyController_1 = require("./../controllers/companyController");
exports.companyRoutes = express_1.Router();
var companyController = new companyController_1.CompanyController();
exports.companyRoutes.post('/signup', companyController.signup);
exports.companyRoutes.post('/login', companyController.login);
