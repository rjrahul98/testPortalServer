import { Schema } from "mongoose";
const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({

    user: { type: Schema.Types.ObjectId, ref: 'userModel'},
    code : { type: String, required : true, unique : true},
    score : { type : Number, required : false},
    status : { type : String, enum : ['created', 'started', 'completed']},
    startedAt : { type : Date,},
    questions: [{ type: Schema.Types.ObjectId, ref: 'questionModel'}]
});

export class TestModel{
    public static testModel = mongoose.model('testModel' , TestSchema);
}