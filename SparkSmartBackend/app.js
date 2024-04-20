const express = require("express");
const dotenv = require('dotenv');
const bodyParser= require('body-parser');


const cors = require('cors');


const Router = require('./route/Route')

const app = express();

app.use(cors());
app.use(bodyParser.json());

// app.use('/uploads', express.static(__dirname + '/uploads'));

app.use("/api/v1",Router);

app.listen(3000 , ()=>{
      console.log("server on port 3000");
})