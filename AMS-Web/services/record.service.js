const { ApiError } = require('../objectCreator/objectCreator');
const { JWT_KEY } = require('../keys/constant');
const recordModel = require('../model/record.model');
const recordService ={};

recordService.getAllRecords=()=>{
    return recordModel.getAllRecords()
    .then(response => {
        if(response) return response;
        throw new ApiError("Cannot Get Record List", 500);
    });
}
recordService.addRecord = (recordDetails) =>{
    return recordModel.addRecord(recordDetails)
    .then(response => {
        if(response) return response;
        throw new ApiError("Cannot add Record", 500);
    });
}
module.exports = recordService;