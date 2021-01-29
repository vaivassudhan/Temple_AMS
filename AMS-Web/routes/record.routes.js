const express = require("express");
const recordService = require("../services/record.service");

const recordRouter = express.Router();
const path = require('path');

recordRouter.post("/add", (req, res, next) => {
    recordService.addRecord(req.body)
    .then(response => res.send(response))
    .catch(error => next(error));
});


recordRouter.post("/edit/", (req, res, next) => {
    recordService.editUserById(req.params.PFNumber,req.body)
    .then(response => res.send(response))
    .catch(error => next(error));
});
recordRouter.get("/all", (req, res, next) => {
    recordService.getAllRecords()
    .then(response => res.send(response))
    .catch(error => next(error));
});

module.exports = recordRouter;