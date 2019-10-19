import "reflect-metadata";
import {IdeaController} from "./src/controllers/ideas";
import express from "express";
import {useExpressServer} from "routing-controllers";

const mongoose = require('mongoose');

let app = express();
useExpressServer(app, {
    controllers: [IdeaController]
});

app.listen(3000);

// mongoose.connect('mongodb://localhost:27017/hive', {useNewUrlParser: true});
// const db = mongoose.connection;

// db.once('open', function(){
//     console.log('Connected to MongoDB');
// });

// db.on('error', function(err){
//     console.log(err);
// });