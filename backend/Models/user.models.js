const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
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
    mobileNumber: {
        type: String,
        required: true,
        match: [/^[0-9]{10}$/, 'Please enter a valid mobile number'] 
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'], 
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    motherName: {
        type: String,
        required: true
    },
    
    dateOfBirth: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    maritalStatus: {
        type: String,
        enum: ['Single', 'Married', 'Divorced', 'Widowed'], 
        required: true
    },
    
    adharaCard: {
        type: String,
        required: true,
        match: [/^[0-9]{12}$/, 'Please enter a valid Aadhar Card number'] 
    },
    sscMarkSheet: {
        type: String,
        required: true
    },
    hscMarkSheet: {
        type: String,
        required: true
    },
    hostelReceipt: {
        type: String,
        required: true
    },
    castCertificate: {
        type: String,
        required: true
    },
    bplCertificate: {
        type: String,
        required: true
    },
    incomeCertificate: {
        type: String,
        required: true
    }
}, { timestamps: true });
const User = mongoose.model('User', userSchema);
module.exports = User;