"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userRoutes_1 = require("./routes/userRoutes");
var companyRoutes_1 = require("./routes/companyRoutes");
var questionRoutes_1 = require("./routes/questionRoutes");
var authenticateService_1 = require("./helper/authenticateService");
var userController_1 = require("./controllers/userController");
var testRoutes_1 = require("./routes/testRoutes");
var userController = new userController_1.UserController();
function configRoutes(app) {
    app.post('/user/signup', userController.signup);
    app.post('/user/login', userController.login);
    app.post('/user', [authenticateService_1.AuthenticateService.authenticate], userRoutes_1.userRoutes);
    app.use('/company', [authenticateService_1.AuthenticateService.authenticate], companyRoutes_1.companyRoutes);
    app.use('/question', [authenticateService_1.AuthenticateService.authenticate], questionRoutes_1.questionRoutes);
    app.use('/test', [authenticateService_1.AuthenticateService.authenticate], testRoutes_1.testRoutes);
}
exports.configRoutes = configRoutes;
