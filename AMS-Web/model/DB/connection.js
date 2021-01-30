const mongoose = require("mongoose");
const {COLLECTION_NAME} = require('../../keys/constant');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

mongoose.set("useCreateIndex", true);
mongoose.set('useFindAndModify', false);


const recordObj = {
    "ACNO":{ type:String,required:true },
    "Name": { type: String },
    "AddressL1": { type: String },
    "AddressL2": { type: String },
    "City": { type: String },
    "State": {type:String},
    "pincode": {type:String},
    "DueDate":{type:String},
    "isvip":{type:String}
};

const connection = {};
const recordSchema = new Schema(recordObj, { collection: "Records", timestamps: true });



connection.getCollection = collectionName => {
    const DB_HOST = "mongodb://localhost:27017";
    return mongoose.connect(`${DB_HOST}/SAMS`, 
    {useNewUrlParser: true, useUnifiedTopology: true}).then((db) => {
        switch (collectionName){
            case COLLECTION_NAME.Records: return db.model(collectionName, recordSchema);

        }
    }).catch(err => {
        let error = new Error("Could not connect to database");
        error.status = 500;
        throw error;
    });
}

module.exports = connection;