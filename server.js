// server.js
const express = require('express');
var app = express();

app.get("/",function(req,res) {
    var headers = req.headers;
    var IP = headers["x-forwarded-for"];
    var lang = headers["accept-language"].split(",")[0];
    var software = /\((.*?)\)/g.exec(headers["user-agent"])[1];
    var r = JSON.stringify({ipaddress: IP,language: lang, software: software},null,2);
    res.end(r);
}).listen(8080,function() {
    console.log("Listening on Port:8080");
});
