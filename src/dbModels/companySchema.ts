const mongoose = require('mongoose')

export const CompanySchema = new mongoose.Schema({

    CompanyName :{
        type : String,
        required : [true, 'enter company name']
    },

    CompanyEmail : {
        type : String,
        required : [true, 'enter company email address'],
        unique : [true, 'email already registered']
    },

    password : {
        type : String,
        required : [true, 'enter password']
    }
})