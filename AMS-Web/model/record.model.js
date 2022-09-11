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
    let acode=ACNO.substring(0,2)
    let scode=ACNO.substring(2)
    console.log(acode,scode)
    return collection.getCollection(COLLECTION_NAME.Records)
        .then(model => model.findOneAndUpdate({ACODE:acode,SCODE:scode},{$set:{
            NAME:data.Name,
            AddressL1:data.AddressL1,
            AddressL2:data.AddressL2,
            AddressL3:data.AddressL3,
            AddressL4:data.AddressL4,
            DUEDATE:data.DueDate,
            isvip:data.isvip}
        }))
        .then(response =>  response);
}
recordModel.archiveRecord = (ACNO) => {
    let acode=ACNO.substring(0,2)
    let scode=ACNO.substring(2)
    console.log(acode,scode)
    return collection.getCollection(COLLECTION_NAME.Records)
        .then(model => model.findOneAndUpdate({"ACODE":acode,"SCODE":scode},{$set:{"isArchived":true}}))
        .then(response =>  {console.log(response)});
}
module.exports = recordModel;