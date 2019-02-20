import { ResponseService } from './../helper/responseService'
import { DbModel } from './../dbModels/dbModel'
import {randomValue} from './../helper/random'
const moment = require('moment')



export class TestService {
    public static async createTest(req: any) {
        try {
            let test = new DbModel.TestModel();
            test.user = req.user.id;
            test.code = randomValue(6);
            test.score = 0;
            test.status = 'created';
            test.createdAt = Date.now();
            test.duration = 30;

            //find queston for my test
            let questions = await DbModel.QuestionModel.find({'category' : 'c++'}).select('_id').exec();
            
            test.questions = questions;
            await test.save();
            return ResponseService.getValidResponse(test);

        }
        catch (err) {
            return ResponseService.getInValidResponse(err);
        }
    }

    public static async getTestDetails(req : any){
        try{
            let data = await DbModel.TestModel.find().populate('user').populate('questions').exec();
            return ResponseService.getValidResponse(data);
        }
        catch(err){
            return ResponseService.getInValidResponse(err);
        }
    }

    public static async verifytTest (req : any){
        try{
        
            let test = await DbModel.TestModel.findOne({'code' : req.body['code'] }).populate('questions').exec();
        
            if(test && test.status == 'created'){

               return ResponseService.getValidResponse({'testId':test._id});
            
            }else if(test && test.status == 'started'){
                let now = new Date();
                let prevdate: Date = test.startedAt;
                let TotalDiff = now.getTime() - prevdate.getTime();
                let remainingTime = Math.floor(TotalDiff / 1000 / 60);
                
                if(remainingTime < test.duration){
                    //if no question with taken false
                    for(const question of test.questions){
                    
                        let res = question.taken;
                        if(res == false){
                            question.taken = true;
                            await question.save();
                            return ResponseService.getValidResponse({
                                'testId' : test._id,
                                'id' : question._id,
                                'statement': question.statement,
                                'option1': question.option1,
                                'option2': question.option2,
                                'option3': question.option3,
                                'option4': question.option4
                                });
                        }
                    
                    }
                }else{
                    return ResponseService.getInValidResponse('test has been expired or completed');
                }
                
            }
            else if(test && test.status == 'completed'){
                return ResponseService.getInValidResponse('test Already taken');
            }
        }
        catch(err){
            return ResponseService.getInValidResponse('verifyTest api not working');
        }
    }
   
    public static async startTest(req : any){
        try{
            let test = await DbModel.TestModel.findOne({'_id': req.body['_id']}).populate('questions').exec();
            console.log(test);
            console.log('aaaaaaa');
            if(test && test.status == 'created'){
                test.status = 'started';
                test.questions[0].taken = true;
                test.startedAt = Date.now();
                test.answers = [];
                test.answers.push({'value' : req.body['answer'], 'id' : test.questions[0]._id});
                await test.save();
        
                return ResponseService.getValidResponse({
                    'testId' : test._id,
                    'id': test.questions[0]._id,
                    'statement': test.questions[0].statement,
                    'option1': test.questions[0].option1,
                    'option2': test.questions[0].option2,
                    'option3': test.questions[0].option3,
                    'option4': test.questions[0].option4
                });
            }else if(test && test.status == 'started'){
                let now = new Date();
                let prevdate: Date = test.startedAt;
                let TotalDiff = now.getTime() - prevdate.getTime();
                let remainingTime = Math.floor(TotalDiff / 1000 / 60);
                
                if (remainingTime < test.duration) {
                
                    for (const question of test.questions) {

                        let res = question.taken;
                        if (res == false) {
                            question.taken = true;
                            await question.save();
                            return ResponseService.getValidResponse({
                                'testId' : test._id,
                                'id': question._id,
                                'statement': question.statement,
                                'option1': question.option1,
                                'option2': question.option2,
                                'option3': question.option3,
                                'option4': question.option4
                            });
                        }

                    }
                } else {
                    return ResponseService.getInValidResponse('test has been expired or completed');
                }

            }
           
        }
        catch(err){
            return ResponseService.getInValidResponse(err);
        }
    }

    public static async getNextQuestion(req : any){
        try{
            let test = await DbModel.TestModel.findOne({'_id' : req.body['_id']}).populate('questions').exec();
            let now = new Date();
            let prevdate: Date = test.startedAt;
            let TotalDiff = now.getTime() - prevdate.getTime();
            let remainingTime = Math.floor(TotalDiff / 1000 / 60);

            if(remainingTime < test.duration){
                let question = test.questions.findOne({'taken' : false}).exec();
                if(!question){
                    test.status = 'completed';
                    await test.save();
                    return ResponseService.getValidResponse('test has been completed');
                }else{
                    test.question.taken = true;
                    test.answers.push({ 'value': req.body['answer'], 'id': test.question._id });
                    return ResponseService.getValidResponse({
                        'testId': test._id,
                        'id': question._id,
                        'statement': question.statement,
                        'option1': question.option1,
                        'option2': question.option2,
                        'option3': question.option3,
                        'option4': question.option4
                    })
                }
            }else{
                test.status = 'completed';
                await test.save();
                return ResponseService.getValidResponse('Your test time limit has finished');
            }
        }
        catch(err){
            return ResponseService.getInValidResponse(err);
        }
    }
}