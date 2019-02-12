export class ResponseService {
    
    //properties
    isValid : Boolean;
    data : any;
    error : any;

    //method 
    constructor(isValid : boolean, data : any, error : any){
        this.isValid = isValid;
        this.data = data;
        this.error = error;
    }

    static getValidResponse(data : any){
        return new ResponseService(true, data, null);
    }

    static getInValidResponse(error: any){
        return new ResponseService(false, null, error);
    }
}