const mongoose = require('mongoose');
const marksSchema = mongoose.Schema({
    studentid : {type: String},
    semesterno: {type: String},
    deptid: {type: String},
    courseid1 : {type: String},
    marks1 : {type: String},
    courseid2 : {type: String},
    marks2 : {type: String},
    courseid3 : {type: String},
    marks3 : {type: String},
     examstatus: {type: String},
     datetaken: {type: String}
    })
    module.exports = mongoose.model('markslist', marksSchema);