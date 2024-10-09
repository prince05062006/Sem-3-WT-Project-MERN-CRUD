const mongoose = require('mongoose');
const schema = mongoose.Schema({
    FacultyId : Number,
    name : String,
    FacultyDept : String,
    FacultyCity : String,
    FacultyImage : String
});
module.exports = mongoose.model('FacultyBack',schema);