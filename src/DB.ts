const mongoose = require('mongoose')


export class Db{
    private mongoUrl : string = "";

    public connectMongooseServer(){
        mongoose.connect(this.mongoUrl, {useNewUrlParser: true})
        .then(()=>{
            console.log('mongo server connected');
        })
        .catch((error: any)=>{
            console.log(error);
            console.log('mongo server connection failed');
        });

    }
}