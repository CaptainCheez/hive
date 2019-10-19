import "reflect-metadata";
import {apple} from "./src/controllers/ideas";
import express from "express";
const createExpressServer = require("routing-controllers");

let app = express();
const mongoose = require('mongoose');

// app = createExpressServer({
//     controllers: [IdeaController]
// });


app.listen(3000);
console.log(apple);

// mongoose.connect('mongodb://localhost:27017/hive', {useNewUrlParser: true});
// const db = mongoose.connection;

// db.once('open', function(){
//     console.log('Connected to MongoDB');
// });

// db.on('error', function(err){
//     console.log(err);
// });