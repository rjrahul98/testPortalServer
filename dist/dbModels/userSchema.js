"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'please enter name']
    },
    email: {
        type: String,
        unique: [true, 'email already registered'],
        required: [true, 'please enter email']
    },
    password: {
        type: String,
        required: [true, 'please enter password']
    },
    mobile: {
        type: Number,
        required: [true, 'please enter mobile no.'],
        unique: [true, 'mobile No. already registered']
    },
    qualification: {
        type: String
    }
});
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    UserModel.userModel = mongoose.model('userModel', UserSchema);
    return UserModel;
}());
exports.UserModel = UserModel;
