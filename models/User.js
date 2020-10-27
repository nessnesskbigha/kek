const mongoose = require('mongoose');


//schema
const UserSchema = new mongoose.Schema({
    firstName: {
        type:String,
    },
    lastName: {
        type:String,
    },
    username: {
        type:String,
    },
    email: {
        type:String,
    },
    password: {
        type:String,
    },
    gender: {
        type:String,
    },
    preferance: {
        type:String,
    },
    birthday: {
        type: String,
    },
    country: {
        type:String,
    },
    city: {
        type:String,
    },
    carteNumber: {
        type: String
    },
    fullName: {
        type: String
    },
    securityCode: {
        type: String
    },
    expiaryDate: {
        type: String
    }
});

module.exports = User = mongoose.model('users',UserSchema);
