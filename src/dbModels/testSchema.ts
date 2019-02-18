import { Schema } from "mongoose";
const mongoose = require('mongoose');

export const TestSchema = new mongoose.Schema({

    user: { type: Schema.Types.ObjectId, ref: 'user'},
    code : { type: String, required : true, unique : true},
    score : { type : Number, required : false},
    status : { type : String, enum : ['created', 'started', 'completed']},
    updatedAt : {type : Date},
    startedAt : { type : Date},
    questions: [{ type: Schema.Types.ObjectId, ref: 'question'}]
});