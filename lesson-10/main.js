// main.js
"use strict";

// @TODO: 웹 서버를 만들고 실행한다.
const port = 3000,
express = require('express'),
layout = require('express-ejs-layouts'),
homeController = require('./controllers/homeController'),
app = express();

app.set("port",process.env.PORT || port);
app.set("view engine","ejs");

app.use(layout); //

app.get('./name/:myName', homeController.respondWithName);
// app.get(); = GET method
// app.post(); = POST method

app.listen(app.get("port"),() =>{
    console.log(`Sever at http://localhost:${app.get("port")}`)
});