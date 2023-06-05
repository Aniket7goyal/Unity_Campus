const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    fname : {
        type:String,
        require: true
    },
    lname : {
        type: String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    }
})

const User = mongoose.model('User', UserSchema);
module.exports = User;