import "reflect-metadata";
import {useExpressServer} from "routing-controllers";
import {UserController} from "./src/controllers/users";
import express from "express";

const mongoose = require('mongoose');

let app = express();
useExpressServer(app, {
    controllers: [UserController]
});

app.listen(3000);

mongoose.connect('mongodb://localhost:27017/hive', {useNewUrlParser: true});
const db = mongoose.connection;

db.once('open', function(){
    console.log('Connected to MongoDB');
});

db.on('error', function(err){
    console.log(err);
});