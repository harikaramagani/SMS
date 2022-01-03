const mongoose = require('mongoose');
const courseSchema = mongoose.Schema({
    courseid : {type: String},
     coursename : {type: String},
     deptid : {type: String},
     semesterno :{type: String}
    })

    module.exports = mongoose.model('courselist', courseSchema);