const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
    studentid: { type: String},
    firstname: { type: String},
    lastname:{ type: String},
    dob: { type: String},
    yoj: { type: String},
    gender: { type: String},
    address: { type: String},
    deptid: { type: String},
    status: { type: String},
    semesterno: { type: String}
})

module.exports = mongoose.model('studentlist', studentSchema);

