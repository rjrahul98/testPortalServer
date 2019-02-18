import { Router } from 'express'
import { QuestionController } from './../controllers/questionController'


export const questionRoutes: Router = Router();

const questionController = new QuestionController();

questionRoutes.post('/addQuestion', questionController.addQuestion);
questionRoutes.put('/updateQuestion/:id', questionController.updateQuestion);
questionRoutes.delete('/deleteQuestion/:id', questionController.deleteQuestion);