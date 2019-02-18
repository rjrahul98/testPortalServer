import { ResponseService } from './../helper/responseService'
import { DbModel } from './../dbModels/dbModel'
import {randomValue} from './../helper/random'



export class TestService {
    public static async createTest(req: any) {
        try {
            let test = new DbModel.TestModel();
            test.user = req.user.id;
            test.code = randomValue(6);
            test.score = '0';
            test.status = 'created';
            test.startedAt = Date.now();

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
            let questions = await DbModel.TestModel.find({'status' : 'created', 'code' : req.body['code'] }).exec();
        
            if(questions){
                let test = [];
                for(const item of questions){
                    test.push({
                        'id' : item._id,
                        'status' : item.status 
                    });
                }
                
                return ResponseService.getValidResponse(test);
            }else{return ResponseService.getInValidResponse('test not found')}
        }
        catch(err){
            return ResponseService.getInValidResponse(err);
        }
    }

    // public static async startTest(req : any){
    //     try{

    //     }
    //     catch(err){
    //         return ResponseService.getInValidResponse(err);
    //     }
    // }
}