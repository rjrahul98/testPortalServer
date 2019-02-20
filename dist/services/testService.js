"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var responseService_1 = require("./../helper/responseService");
var dbModel_1 = require("./../dbModels/dbModel");
var random_1 = require("./../helper/random");
var moment = require('moment');
var TestService = /** @class */ (function () {
    function TestService() {
    }
    TestService.createTest = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var test, questions, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        test = new dbModel_1.DbModel.TestModel();
                        test.user = req.user.id;
                        test.code = random_1.randomValue(6);
                        test.score = 0;
                        test.status = 'created';
                        test.createdAt = Date.now();
                        test.duration = 30;
                        return [4 /*yield*/, dbModel_1.DbModel.QuestionModel.find({ 'category': 'c++' }).select('_id').exec()];
                    case 1:
                        questions = _a.sent();
                        test.questions = questions;
                        return [4 /*yield*/, test.save()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, responseService_1.ResponseService.getValidResponse(test)];
                    case 3:
                        err_1 = _a.sent();
                        return [2 /*return*/, responseService_1.ResponseService.getInValidResponse(err_1)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TestService.getTestDetails = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var data, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, dbModel_1.DbModel.TestModel.find().populate('user').populate('questions').exec()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, responseService_1.ResponseService.getValidResponse(data)];
                    case 2:
                        err_2 = _a.sent();
                        return [2 /*return*/, responseService_1.ResponseService.getInValidResponse(err_2)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TestService.verifytTest = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var test, now, prevdate, TotalDiff, remainingTime, _i, _a, question, res, err_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 11, , 12]);
                        return [4 /*yield*/, dbModel_1.DbModel.TestModel.findOne({ 'code': req.body['code'] }).populate('questions').exec()];
                    case 1:
                        test = _b.sent();
                        if (!(test && test.status == 'created')) return [3 /*break*/, 2];
                        return [2 /*return*/, responseService_1.ResponseService.getValidResponse({ 'testId': test._id })];
                    case 2:
                        if (!(test && test.status == 'started')) return [3 /*break*/, 9];
                        now = new Date();
                        prevdate = test.startedAt;
                        TotalDiff = now.getTime() - prevdate.getTime();
                        remainingTime = Math.floor(TotalDiff / 1000 / 60);
                        console.log(remainingTime);
                        if (!(remainingTime < test.duration)) return [3 /*break*/, 7];
                        _i = 0, _a = test.questions;
                        _b.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        question = _a[_i];
                        res = question.taken;
                        if (!(res == false)) return [3 /*break*/, 5];
                        question.taken = true;
                        return [4 /*yield*/, question.save()];
                    case 4:
                        _b.sent();
                        return [2 /*return*/, responseService_1.ResponseService.getValidResponse({
                                'id': question._id,
                                'statement': question.statement,
                                'option1': question.option1,
                                'option2': question.option2,
                                'option3': question.option3,
                                'option4': question.option4
                            })];
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 8];
                    case 7: return [2 /*return*/, responseService_1.ResponseService.getInValidResponse('test has been expired or completed')];
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        if (test && test.status == 'completed') {
                            return [2 /*return*/, responseService_1.ResponseService.getInValidResponse('test Already taken')];
                        }
                        _b.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        err_3 = _b.sent();
                        return [2 /*return*/, responseService_1.ResponseService.getInValidResponse('verifyTest api not working')];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    TestService.startTest = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var test, now, prevdate, TotalDiff, remainingTime, _i, _a, question, res, err_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 10, , 11]);
                        return [4 /*yield*/, dbModel_1.DbModel.TestModel.findOne({ '_id': req.body['_id'] }).populate('questions').exec()];
                    case 1:
                        test = _b.sent();
                        console.log(test);
                        console.log('aaaaaaa');
                        if (!(test && test.status == 'created')) return [3 /*break*/, 3];
                        test.status = 'started';
                        test.startedAt = Date.now();
                        test.answers = [];
                        test.answers.push({ 'value': req.body['answer'], 'id': test.questions[0]._id });
                        return [4 /*yield*/, test.save()];
                    case 2:
                        _b.sent();
                        console.log(test);
                        return [2 /*return*/, responseService_1.ResponseService.getValidResponse({
                                'id': test.questions[0]._id,
                                'statement': test.questions[0].statement,
                                'option1': test.questions[0].option1,
                                'option2': test.questions[0].option2,
                                'option3': test.questions[0].option3,
                                'option4': test.questions[0].option4
                            })];
                    case 3:
                        if (!(test && test.status == 'started')) return [3 /*break*/, 9];
                        now = new Date();
                        prevdate = test.startedAt;
                        TotalDiff = now.getTime() - prevdate.getTime();
                        remainingTime = Math.floor(TotalDiff / 1000 / 60);
                        console.log(remainingTime);
                        if (!(remainingTime < test.duration)) return [3 /*break*/, 8];
                        _i = 0, _a = test.questions;
                        _b.label = 4;
                    case 4:
                        if (!(_i < _a.length)) return [3 /*break*/, 7];
                        question = _a[_i];
                        res = question.taken;
                        if (!(res == false)) return [3 /*break*/, 6];
                        question.taken = true;
                        return [4 /*yield*/, question.save()];
                    case 5:
                        _b.sent();
                        return [2 /*return*/, responseService_1.ResponseService.getValidResponse({
                                'id': question._id,
                                'statement': question.statement,
                                'option1': question.option1,
                                'option2': question.option2,
                                'option3': question.option3,
                                'option4': question.option4
                            })];
                    case 6:
                        _i++;
                        return [3 /*break*/, 4];
                    case 7: return [3 /*break*/, 9];
                    case 8: return [2 /*return*/, responseService_1.ResponseService.getInValidResponse('test has been expired or completed')];
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        err_4 = _b.sent();
                        return [2 /*return*/, responseService_1.ResponseService.getInValidResponse(err_4)];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    TestService.getNextQuestion = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                }
                catch (err) {
                    return [2 /*return*/, responseService_1.ResponseService.getInValidResponse(err)];
                }
                return [2 /*return*/];
            });
        });
    };
    return TestService;
}());
exports.TestService = TestService;
