import { QuestionModel } from './../dbModels/questionSchema'
import { ResponseService } from './../helper/responseService'


export class QuestionService {
    public static async addQuestion(req: any) {
        try {
            let question = QuestionModel.questionModel(req.body);
            await question.save();
            return ResponseService.getValidResponse(question);

        }
        catch (err) {
            return ResponseService.getInValidResponse(err);
        }
    }

    public static async updateQuestion(req: any) {
        try {
            let question = await QuestionModel.questionModel.findByIdAndUpdate('id', req.body).exec();
            if (question) {
                question.save();
            }
                else { return ResponseService.getInValidResponse('email or password is incorrect') };
        }
        catch (err) {
            return ResponseService.getInValidResponse(err);
        }
    }
}