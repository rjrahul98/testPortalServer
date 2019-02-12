const mongoose = require('mongoose')

const CompanySchema = new mongoose.Schema({

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

export class CompanyModel{
    public static companyModel = mongoose.model('companyModel', CompanySchema);
}