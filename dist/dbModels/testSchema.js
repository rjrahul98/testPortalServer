"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var mongoose = require('mongoose');
exports.TestSchema = new mongoose.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'user' },
    code: { type: String, required: true, unique: true },
    score: { type: Number, required: false },
    status: { type: String, enum: ['created', 'started', 'completed'] },
    updatedAt: { type: Date },
    startedAt: { type: Date },
    questions: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'question' }]
});
