import * as jwtClient from 'jsonwebtoken'
import { ResponseService } from './responseService';

export class AuthenticateService {
    static authenticate(req: any, res: any, next: any) {
        let token = req.header('Authorization');
        if (!token) {
            return res.json(ResponseService.getInValidResponse('access denied'));
        }
        let user = jwtClient.verify(token, 'testPortal');
        req.user = user;
        next();
    }
}