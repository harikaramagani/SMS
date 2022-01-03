const express = require("express")
var mongoose = require('mongoose');
const router = express.Router();
var usersModel = require('../model/course.js');
// const { request } = require("express");

router.post('/courseAdd',(request,response ) => {
    console.log("request", request);
    const user = new usersModel({
        courseid : request.body.courseid,
    coursename : request.body.coursename,
    deptid : request.body.deptid,
    semesterno : request.body.semesterno
});

user.save().then(data => {
    var object = {
         "statuscode": 200,
         "message": "Sucessfully created a Student",
         "record": data
     };
     response.send(object);  
}).catch(error => {
  var objectres = {
      "statuscode": 500,
      "message": error
  };
  response.send(objectres);
}) 
});
module.exports = router;