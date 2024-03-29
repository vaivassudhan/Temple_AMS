const express = require("express");
const recordService = require("../services/record.service");

const recordRouter = express.Router();
const path = require('path');

recordRouter.post("/add", (req, res, next) => {
    recordService.addRecord(req.body)
    .then(response => res.send(response))
    .catch(error => next(error));
});


recordRouter.post("/cleanRec", (req, res, next) => {
    console.log('ggf',req.body)
    recordService.insertRec(req.body)
    .then(response => res.send(response))
    .catch(error => next(error));
});

recordRouter.post("/edit/:ACNO", (req, res, next) => {
    recordService.editRecord(req.params.ACNO,req.body)
    .then(response => res.send(response))
    .catch(error => next(error));
});
recordRouter.get("/allRecords", (req, res, next) => {
    recordService.getAllRecords()
    .then(response => res.send(response))
    .catch(error => next(error));
});
recordRouter.get("/archive/:ACNO", (req, res, next) => {
    recordService.archiveRecord(req.params.ACNO)
    .then(response => res.send(response))
    .catch(error => next(error));
});


module.exports = recordRouter;