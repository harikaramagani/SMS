const express = require("express")
var mongoose = require('mongoose');
const router = express.Router();
var usersModel = require('../model/dept.js');
// const { request } = require("express");

router.post('/deptAdd',(request,response ) => {
    console.log("request", request);
    const user = new usersModel({
        deptid : request.body.deptid,
    deptname : request.body.deptname,
    maxintake : request.body.maxintake
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