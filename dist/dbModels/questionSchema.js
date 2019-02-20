"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
exports.QuestionSchema = new mongoose.Schema({
    statement: { type: String, required: true },
    option1: { type: String, required: true },
    option2: { type: String, required: true },
    option3: { type: String, required: true },
    option4: { type: String, required: true },
    category: { type: String, required: true, enum: ['c', 'c++', 'javascript'], },
    codeSample: { type: String },
    answer: { type: Number, required: true },
    taken: { type: Boolean, default: false },
});
