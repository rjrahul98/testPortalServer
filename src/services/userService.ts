import {UserModel} from './../dbModels/userSchema'
import {ResponseService} from './../helper/responseService'
const bcrypt = require('bcryptjs')
const passwordHash = require('password-hash')
const jwt = require('jsonwebtoken')



export class UserService{
    public static async signup(req : any){
        try{
            let user = UserModel.userModel(req.body);
            let hashedPassword = passwordHash.generate(req.body['password']);
            user.password = hashedPassword;
            await user.save();
            return ResponseService.getValidResponse(user);

        }
        catch(err){
            return ResponseService.getInValidResponse(err);
        }
    }

    public static async login(req : any){
        try{
            let user = await UserModel.userModel.findOne({'email' : req.body['email']}).exec();
            if(user){
                let isValidUser = await passwordHash.verify(req.body['password'], user.password);
                if(isValidUser){
                    let token = await jwt.sign({ 'email': user.email, 'id': user._id }, 'testPortal');
                    return ResponseService.getValidResponse({ 'token': token });
                }
                else { return ResponseService.getInValidResponse('email or password is incorrect') };
            }
        }
        catch(err){
            return ResponseService.getInValidResponse(err);
        }
    }
}