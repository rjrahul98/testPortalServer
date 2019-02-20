import { DbModel } from './../dbModels/dbModel'
import { ResponseService } from './../helper/responseService'


export class QuestionService {
    public static async addQuestion(req: any) {        
        try {
            let question = DbModel.QuestionModel(req.body);
            await question.save();
            return ResponseService.getValidResponse(question);

        }
        catch (err) {
            return ResponseService.getInValidResponse(err);
        }
    }

    public static async updateQuestion(req: any) {
        try {
            let option = {upsert : true, new : true, setDefaultsOnInsert : true}
            let question = await DbModel.QuestionModel.findOneAndUpdate({'_id': req.params['id']}, req.body, option).exec();
            await question.save();
            return ResponseService.getValidResponse('updated');
        }
        catch (err) {
            return ResponseService.getInValidResponse(err);
        }
    }

    public static async deleteQuestion(req : any){
        try{
            await DbModel.QuestionModel.remove({'_id' : req.params['id']}).exec();
            return ResponseService.getValidResponse('Question Deleted');
        }
        catch(err){
            return ResponseService.getInValidResponse('Something went wrong Please Check Question Id');
        }
    }
}