import { QuestionService } from './../services/questionService'
import { Request, Response } from 'express'


export class QuestionController {

    public async addQuestion(req: Request, res: Response) {
        let newQuestion = await QuestionService.addQuestion(req);
        return res.json(newQuestion);
    };

    public async updateQuestion(req: Request, res: Response) {
        let updateQuestion = await QuestionService.updateQuestion(req);
        return res.json(updateQuestion);
    }

   public async deleteQuestion(req : Request, res : Response){
       let response = await QuestionService.deleteQuestion(req);
       return res.json(response);
   }
}