import { Schema } from "mongoose";
const mongoose = require('mongoose');

export const TestSchema = new mongoose.Schema({

    user: { type: Schema.Types.ObjectId, ref: 'user'},
    code : { type: String, required : true, unique : true},
    score : { type : Number, required : false},
    status : { type : String, enum : ['created', 'started', 'completed']},
    createdAt : {type : Date},
    startedAt : { type : Date},
    duration : {type : Number, required : true, default : 30}, // duration in minutes
    questions: [{ type: Schema.Types.ObjectId, ref: 'question'}],
    answers : [{value : Number, id : String}]
});