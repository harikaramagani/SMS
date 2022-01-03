const mongoose = require('mongoose');
const deptSchema = mongoose.Schema({
    deptid : {type: String},
    deptname :{type: String},
    maxintake :{type: String}
})

module.exports = mongoose.model('deptlist', deptSchema);