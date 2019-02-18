import { TestService } from './../services/testService'
import { Request, Response } from 'express'


export class TestController {

    public async createTest(req: Request, res: Response) {
        let newTest = await TestService.createTest(req);
        return res.json(newTest);
    };

    public async getTestDetails(req: Request, res : Response){
        let tests = await TestService.getTestDetails(req);
        return res.json(tests);
    };

    public async verifyTest(req : Request, res : Response){
        let test = await TestService.verifytTest(req);
        return res.json(test);
    }
}