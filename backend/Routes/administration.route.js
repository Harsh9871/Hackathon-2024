const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const bcrypt = require('bcrypt');
const adminstration = require('../Models/adminstration.models.js')

router.post('/',async(req,res)=>{
    const{
        userName,email,password,role
    } = req.boby;

    if(!userName||!email||!password||!role){
        return res.status(400).json({message:'All fields are required'});
    }

    try {
        let existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: 'User with this email already exists' });
        }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const adminUser = new adminstration({
        userName,
        email,
        password:hashedPassword,
        role
    });
    await adminUser.save();
    res.status(201).json({'msg':'User created successfully'})
    }catch(e){
        res.json(500).json({'msg':'Internal server error'})
    }
});


module.exports = router;