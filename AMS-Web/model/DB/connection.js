const mongoose = require("mongoose");
const {COLLECTION_NAME} = require('../../keys/constant');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

mongoose.set("useCreateIndex", true);
mongoose.set('useFindAndModify', false);


const recordObj = {
    "AC.No":{ type:String },
    "Name": { type: String },
    "Address Line1": { type: String },
    "Address Line2": { type: String },
    "Address Line3": { type: String },
    "State": {type:String},
    "Pincode": {type:String},
    "DueDate":{type:String}
};

const connection = {};
const recordSchema = new Schema(recordObj, { collection: "Records", timestamps: true });



connection.getCollection = collectionName => {
    const DB_HOST = "mongodb://localhost:27017";
    return mongoose.connect(`${DB_HOST}/SRGP`, 
    {useNewUrlParser: true, useUnifiedTopology: true}).then((db) => {
        switch (collectionName){
            case COLLECTION_NAME.RECORDS: return db.model(collectionName, recordSchema);

        }
    }).catch(err => {
        let error = new Error("Could not connect to database");
        error.status = 500;
        throw error;
    });
}

module.exports = connection;