const express = require("express");
var mongoose = require('mongoose');
//const student = require("../model/student.js");
const router = express.Router();
var studentModel = require('../model/student.js');
// const { request } = require("express");

//add student api
router.post('/addStudent', (request, response) => {
  console.log("request", request);
  const user = new studentModel({
    studentid: request.body.studentid,
    firstname: request.body.firstname,
    lastname: request.body.lastname,
    dob: request.body.dob,
    yoj: request.body.yoj,
    gender: request.body.gender,
    address: request.body.address,
    deptid: request.body.deptid,
    status: request.body.status,
    semesterno: request.body.semesterno
  });
  if(user.studentid ===""){
    var objecters={
      "statuscode":400,
      "message":"studentid is mandatory"
    };
    response.send( objecters);
    return;
  }
  if(user.studentid.length !=10){ 
    var objecters={
    "statuscode":400,
    
    "message":"studentid is mandatory"
  };
  response.send( objecters);
  return;
}
//  if (student.firstname == "" || student.lastname == "" || student.address == "" || student.yoj == "" || student.age == "" ||
//     student.gender == "") {
//     var object = {
//       "statusCode": 400,
//       "message": "mandatory fields are not empty",
//     };
//     response.send(object);
//   }
  // else {
    user.save().then(data => {
      var object = {
        "statuscode": 200,
        "message": "Sucessfully created a Student",
        "record": data
      };
      response.send(object);
    })
      .catch(error => {
        var object = {
          "statuscode": 500,
          "message": "Student not created"
        };
        response.send(object);
      });
 // };
});


//delete student api
// router.post('/deleteStudent', function (request, response) {
//   studentModel
//     .findOne({ studentid: request.body.studentid })
//     .lean()
//     .exec()
//     .then(function (data) {
//       if (data) {
//         //  let obj = {
//         //  "statusCode": 200,
//         // "record": data,
//         //    "message": "Sucessfully get the Student"

//         //  }
//          response.status(200).send(obj); 
//         console.log("data", data);
//         if (data.status == "suspended" || data.status == "rusticated") {
//           studentModel.deleteOne({_id:request.body._id})
//             .lean()
//             .exec()
//             .then(function (data) {
//               if (data) {
//                 var object = {
//                   "statusCode": 200,
//                   "message": " sucessfully student  deleted"

//                 };
//                 response.send(object);

//               }
              
//             })
//             .catch(function (error) {
//               var object = {
//                 "statusCode": 500,
//                 "message": "Student details not found"
//               };
//               response.status(500).send(object);
//             });
//         }else {
//           if (data.status == "active") {
//             var object = {
//               "statusCode": 200,
//               "message": " student status is active cant delete"
//             };
//             response.send(object);
//           }
//         }
//       }
//     })
//     .catch(function (error) {
//       var object = {
//         "statusCode": 500,
//         "message": "Student details not found"
//       };
//       response.status(500).send(object);
//     });
// })

router.post('/deleteStudent', function (request, response) {
  studentModel
  .deleteOne({studentid: request.body.studentid })
  .lean()
  .exec()
  .then(function (data) {
    if (data) {
      console.log(data)
      let obj = {
        "statusCode": 200,
        "record": data,
        "message": "Sucessfully delete the Student"
      }
      response.status(200).send(obj);
    }
  })
  .catch(function (error) {
    let obj = {
      "statusCode": 500,
      "message": "Student details not found"
    };
    response.status(500).send(obj);
  });
});

//get student api
router.post('/getStudent', function (request, response) {
  studentModel
    .findOne({studentid: request.body.studentid })
    .lean()
    .exec()
    .then(function (data) {
      if (data) {
        console.log(data)
        let object = {
          "statusCode": 200,
          "record": data,
          "message": "Sucessfully student details found"
        }
        response.status(200).send(object);
      }
    })
    .catch(function (error) {
      let object = {
        "statusCode": 500,
        "message": "Student details not found"
      };
      response.status(500).send(object);
    });
});


//update student api
router.post('/updateStudent', function (request, response) {
  studentModel.findOne({ studentid: request.body.studentid })
    .exec()
    .then(function (data) {
      if (data) {
        console.log("1", data);
        data.firstname = request.body.firstname;
        data.lastname = request.body.lastname;
        data.address = request.body.address;
        console.log("2", data);
        data.save().then(function (data) {
          var object = {
            "statusCode": 200,
            "record": data,
            "message": "Sucessfully updated a Student"
          }
          response.send(object);
        })
          .catch(function (error) {
            var object = {
              "statusCode": 500,
              "message": "student not updated",
              "record": error
            }
            response.send(object);
          })
      }
    })
    .catch(function (error) {
      var object = {
        "statusCode": 500,
        "message": "student not found",
      }
      console.log("error message", error);
      response.send(object);
    })
});

module.exports = router;