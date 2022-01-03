const express = require("express");
var mongoose = require('mongoose');
const router = express.Router();
var app = express();
const bodyParser = require('body-parser');
app.use( bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var studentModel = require('./model/student.js');
var studentApi = require('./router/studentApi.js');

 var deptModel = require('./model/dept.js');
var deptApi = require('./router/deptApi.js');


var courseModel = require('./model/course.js');
var courseApi = require('./router/courseApi.js');


var marksModel = require('./model/marks.js');
var marksApi = require('./router/marksApi.js');
 


app.use('/',router);
app.get("/",function(request,response){
response.send("Hello World!")
})
mongoose.connect('mongodb://localhost:27017/studentMarksSystem', () => {
console.log("[+] Sucessfully connected to database.");
});

app.listen(2000, function () {
console.log("Started application on port %d", 2000)
});

app.use('/', studentApi);
 app.use('/', deptApi);
app.use('/', courseApi);
app.use('/', marksApi);
