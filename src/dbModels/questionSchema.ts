const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({

    statement : {type : String, required : true},

    option1 : {type : String, required : true },
    option2: {type: String, required: true},
    option3: {type: String, required: true}, 
    option4: {type: String, required: true},

    category : {type : String, enum : ['c', 'c++', 'javascript'], },

    codeSample : {type : String},

    answer : {type : Number, required : true}
});

export class QuestionModel {
    public static questionModel = mongoose.model('questionModel', QuestionSchema);
}