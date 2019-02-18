"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
exports.CompanySchema = new mongoose.Schema({
    CompanyName: {
        type: String,
        required: [true, 'enter company name']
    },
    CompanyEmail: {
        type: String,
        required: [true, 'enter company email address'],
        unique: [true, 'email already registered']
    },
    password: {
        type: String,
        required: [true, 'enter password']
    }
});
