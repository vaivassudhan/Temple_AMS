const mongoose = require("mongoose");
const {COLLECTION_NAME} = require('../../keys/constant');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

mongoose.set("useCreateIndex", true);
mongoose.set('useFindAndModify', false);


const recordObj = {
    "ACODE":{ type:String,required:true },
    "SCODE": { type:String },
    "NAME": { type: String },
    "AddressL1": { type: String },
    "AddressL2": { type: String },
    "AddressL3": { type: String },
    "AddressL4": {type:String},
    "DUEDATE":{type:String},
    "isVIP":{type:String},
};
const aux={
    ACODE:{ type:String },
    SCODE: { type:String },
    NAME: { type:String },
    DUEDATE: { type:Date },
    AddressL1: { type:String },
    AddressL2: { type:String },
    AddressL3: { type:String },
    AddressL4: { type:String },
    isVIP: { type:Boolean },
}

const connection = {};
const recordSchema = new Schema(recordObj, { collection: "Records", timestamps: true });
const auxS = new Schema(aux, { collection: "Auxilary", timestamps: true });



connection.getCollection = collectionName => {
    const DB_HOST = "mongodb://localhost:27017";
    return mongoose.connect(`${DB_HOST}/SAMS`, 
    {useNewUrlParser: true, useUnifiedTopology: true}).then((db) => {
        switch (collectionName){
            case COLLECTION_NAME.Records: return db.model(collectionName, recordSchema);
            case COLLECTION_NAME.Auxilary: return db.model(collectionName, auxS);

        }
    }).catch(err => {
        let error = new Error("Could not connect to database");
        error.status = 500;
        throw error;
    });
}

module.exports = connection;