const express = require("express")
var mongoose = require('mongoose');
const router = express.Router();
var usersModel = require('../model/marks.js');
// const { request } = require("express");

router.post('/marksAdd',(request,response ) => {
    console.log("request", request);
    const user = new usersModel({
        studentid : request.body. studentid,
        semesterno:request.body. semesterno,
        deptid : request.body.deptid,
        courseid1 : request.body.courseid1,
        marks1: request.body.marks1,
        courseid2 : request.body.courseid2,
        marks2: request.body.marks2,
        courseid3: request.body.courseid3,
        marks3: request.body.marks3,
        examstatus: request.body.examstatus,
        datetaken:  request.body.datetaken
    });      


user.save().then(data => {
    var object = {
         "statuscode": 200,
         "message": "Sucessfully created a Studentmarks",
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


router.post('/getStudentsMarkList', (request,response) => {
    usersModel
    .findOne({studentid: request.body.studentid })
    .lean()
    .exec()
    .then(function (data){
      if (data){
        var obj= {
          "statuscode": 200,
          "message":"successfully getting the students MARKS",
          "record": data
  
        };
        response.send(obj);
      }
    })
    .catch(function(error){
      let obj = {
        "statuscode":500,
        "message":error
      };
      response.send(obj);
    });
  });
  
  router.post('/getSemesterMarklist', (request,response) => {
    usersModel
    .find({semesterno:request.body.semesterno})
    .lean()
    .exec()
    .then(function (data){
      if (data){
        var obj= {
          "statuscode": 200,
          "message":"successfully getting the semester MARKS",
          "record": data
  
        };
        response.send(obj);
      }
    })
    .catch(function(error){
      let obj = {
        "statuscode":500,
        "message":error
      };
      response.send(obj);
    });
  });
  
  router.post('/getIndividualList', (request,response) => {
    usersModel
    .findOne({deptid:request.body.deptid})
    .lean()
    .exec()
    .then(function (data){
      if (data){
        var obj= {
          "statuscode": 200,
          "message":"successfully getting the department details",
          "record": data
  
        };
        response.send(obj);
      }
    })
    .catch(function(error){
      let obj = {
        "statuscode":500,
        "message":error
      };
      response.send(obj);
    });
  });


module.exports = router;