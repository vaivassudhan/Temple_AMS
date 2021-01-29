const collection = require('./DB/connection');
const { COLLECTION_NAME } = require('../keys/constant');
const { model } = require('mongoose');

const recordModel = {};
recordModel.getAllRecords =() =>{
    return collection.getCollection(COLLECTION_NAME.Records)
    .then(model => model.find())
    .then(response =>  response);
}
recordModel.addRecord = details => {
    return collection.getCollection(COLLECTION_NAME.Records)
        .then(model => model.create(details))
        .then(response =>  response);
}
module.exports = recordModel;