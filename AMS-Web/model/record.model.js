const collection = require('./DB/connection');
const { COLLECTION_NAME } = require('../keys/constant');
const { model } = require('mongoose');

const recordModel = {};
recordModel.getAllRecords =() =>{
    return collection.getCollection(COLLECTION_NAME.Records)
    .then(model => model.find().sort({"ACODE":1,"SCODE":1}))
    .then(response =>  response);
}
recordModel.addRecord = details => {
    return collection.getCollection(COLLECTION_NAME.Records)
        .then(model => model.create(details))
        .then(response =>  response);
}
recordModel.insertAll = details => {
    return collection.getCollection(COLLECTION_NAME.Auxilary)
        .then(model => model.insertMany(details))
        .then(response =>  response);
}
recordModel.editRecord = (ACNO,data) => {
    return collection.getCollection(COLLECTION_NAME.Records)
        .then(model => model.findOneAndUpdate({ACNO:ACNO},{$set:{
            Name:data.Name,
            AddressL1:data.AddressL1,
            AddressL2:data.AddressL2,
            City:data.City,
            State:data.State,
            pincode:data.pincode,
            DueDate:data.DueDate,
            isvip:data.isvip}
        },{new:true}))
        .then(response =>  response);
}
recordModel.archiveRecord = (ACNO) => {
    return collection.getCollection(COLLECTION_NAME.Records)
        .then(model => model.findOneAndUpdate({ACNO:ACNO},{$set:{
            Expired:true}
        },{new:true}))
        .then(response =>  response);
}
module.exports = recordModel;