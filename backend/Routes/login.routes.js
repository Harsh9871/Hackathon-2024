const express = require('express');
const router = express.Router();
const User = require('../Models/user.models.js'); 
const bcrypt = require('bcrypt');

router.post('/',(req,res)=>{
    const {email,password} = req.body;
    const user = User.findOne({email:email})
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    
})

module.exports = router;