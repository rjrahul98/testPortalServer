"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var testController_1 = require("./../controllers/testController");
exports.testRoutes = express_1.Router();
var testController = new testController_1.TestController();
exports.testRoutes.post('/createTest', testController.createTest);
exports.testRoutes.get('/getTests', testController.getTestDetails);
exports.testRoutes.put('/verifyTest', testController.verifyTest);
