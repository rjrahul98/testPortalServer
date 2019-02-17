import { TestModel } from './../dbModels/testSchema'
import { ResponseService } from './../helper/responseService'



export class TestService {
    public static async createTest(req: any) {
        try {
            let test = TestModel.testModel(req.body);
            await test.save();
            return ResponseService.getValidResponse(test);

        }
        catch (err) {
            return ResponseService.getInValidResponse(err);
        }
    }
}