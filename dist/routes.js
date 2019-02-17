"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userRoutes_1 = require("./routes/userRoutes");
var companyRoutes_1 = require("./routes/companyRoutes");
var questionRoutes_1 = require("./routes/questionRoutes");
function configRoutes(app) {
    app.use('/user', userRoutes_1.userRoutes);
    app.use('/company', companyRoutes_1.companyRoutes);
    app.use('/question', questionRoutes_1.questionRoutes);
}
exports.configRoutes = configRoutes;
