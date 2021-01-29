const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require('cors');


const recordRouter = require("./routes/record.routes");

const errorLogger = require("./utils/errorLogger");

const app = express();

const MAX_UPLOAD_SIZE = '10mb';
app.use(cors());

app.use(bodyParser.json({limit:MAX_UPLOAD_SIZE}));
app.use(bodyParser.urlencoded({extended:true, limit:MAX_UPLOAD_SIZE}))
app.use('/record',recordRouter);
app.use(errorLogger);


const PORT = process.env.PORT || 5000;
app.listen(PORT,'192.168.1.15');
