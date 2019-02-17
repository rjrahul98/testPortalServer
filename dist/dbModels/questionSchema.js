"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var QuestionSchema = new mongoose.Schema({
    statement: { type: String, required: true },
    option1: { type: String, required: true },
    option2: { type: String, required: true },
    option3: { type: String, required: true },
    option4: { type: String, required: true },
    categories: { type: String, enum: ['c', 'c++', 'javascript'], },
    codeSample: { type: String },
    answer: { type: Number, required: true }
});
var QuestionModel = /** @class */ (function () {
    function QuestionModel() {
    }
    QuestionModel.questionModel = mongoose.model('questionModel', QuestionSchema);
    return QuestionModel;
}());
exports.QuestionModel = QuestionModel;
