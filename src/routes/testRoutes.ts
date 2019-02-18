import { Router } from 'express'
import { TestController } from './../controllers/testController'


export const testRoutes: Router = Router();

const testController = new TestController();

testRoutes.post('/createTest', testController.createTest);
testRoutes.get('/getTests', testController.getTestDetails);
testRoutes.post('/verifyTest', testController.verifyTest);