import { Router } from 'express'
import { QuestionController } from './../controllers/questionController'


export const questionRoutes: Router = Router();

const questionController = new QuestionController();

questionRoutes.post('/addQuestion', questionController.addQuestion);
questionRoutes.post('/updateQuestion/:id', questionController.updateQuestion);