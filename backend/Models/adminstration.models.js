const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    role:{
        type:String,
        required: true,
    },
    permissions:{
        type:Array,
    }

}, { timestamps: true });

const adminstration = mongoose.model('Adminstration', userSchema);
module.exports = adminstration;