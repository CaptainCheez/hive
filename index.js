import "reflect-metadata";
import {createExpressServer} from "routing-controllers";
const express = require('express');
const app = express();


app = createExpressServer({
    controllers: []
});

app.listen(3000);

