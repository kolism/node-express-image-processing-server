const { response } = require('express');
let express = require('express')
let path = require('path')


const app = express();
const pathToIndex = path.resolve(__dirname,'../client/index.html');

app.use("/*",(req,res)=>{
    response.sendFile(pathToIndex);
})

module.exports = app;