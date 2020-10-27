const mongoose = require('mongoose');


//schema
const PasswordSchema = new mongoose.Schema({
    password: {
        type:String,
    },
});

module.exports = Password = mongoose.model('password',PasswordSchema);