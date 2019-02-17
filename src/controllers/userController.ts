import {UserService} from './../services/userService'
import {Request, Response} from 'express'


export class UserController{

    public async signup(req : Request, res : Response){
        let newUser = await UserService.signup(req);
        return res.json(newUser);
    };

    public async login(req : Request, res : Response){
        let loggedUser = await UserService.login(req);
        res.header("hjgjhg", "hghjg");
        return res.json(loggedUser);
    }
}