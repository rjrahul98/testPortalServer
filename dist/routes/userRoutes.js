"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController_1 = require("./../controllers/userController");
exports.userRoutes = express_1.Router();
var userController = new userController_1.UserController();
