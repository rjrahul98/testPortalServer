const mongoose = require("mongoose")

import { QuestionSchema } from './questionSchema';
import { UserSchema } from './userSchema';
import { TestSchema } from './testSchema';
import { CompanySchema } from './companySchema';

export class DbModel {
    public static UserModel = mongoose.model('user', UserSchema);
    public static TestModel = mongoose.model('test', TestSchema);
    public static CompanyModel = mongoose.model('company', CompanySchema);
    public static QuestionModel = mongoose.model('question', QuestionSchema);
}