const mgs = require('mongoose');

const userScm = mgs.Schema({
    name : {
        type: String,
        maxLength : 50
    },
    email : {
        type: String,
        trim : true,
        unique : 1
    },
    password : {
        type : String,
        maxLength : 50
    },
    lastname : {
        type : String,
        maxlength :50
    },
    role : {
        tyle : Number,
        default : 0
    },
    image : String,
    token : {
        type : String
    },
    tokenExp : {
        type : Number
    }
})

const User = mgs.model('User', userScm)

module.exports = {User}