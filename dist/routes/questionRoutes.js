"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var questionController_1 = require("./../controllers/questionController");
exports.questionRoutes = express_1.Router();
var questionController = new questionController_1.QuestionController();
exports.questionRoutes.post('/addQuestion', questionController.addQuestion);
exports.questionRoutes.put('/updateQuestion/:id', questionController.updateQuestion);
exports.questionRoutes.delete('/deleteQuestion/:id', questionController.deleteQuestion);
