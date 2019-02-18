"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwtClient = __importStar(require("jsonwebtoken"));
var responseService_1 = require("./responseService");
var AuthenticateService = /** @class */ (function () {
    function AuthenticateService() {
    }
    AuthenticateService.authenticate = function (req, res, next) {
        var token = req.header('Authorization');
        if (!token) {
            return res.json(responseService_1.ResponseService.getInValidResponse('access denied'));
        }
        var user = jwtClient.verify(token, 'testPortal');
        req.user = user;
        next();
    };
    return AuthenticateService;
}());
exports.AuthenticateService = AuthenticateService;
