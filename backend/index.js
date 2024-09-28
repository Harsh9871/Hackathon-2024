const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5000 ;
app.use(express.json())
const mongoose = require('mongoose')
mongoose.connect(process.env.dbURI)

app.get('/',(req,res)=>{
    res.json({'msg':'hello'})
})

// Sign up page route
const signUp = require('./Routes/signup.route.js')
app.use('/auth/signup',signUp)

//administration user signup 
const adminSignUp = require('./Routes/administration.route.js')
app.use('/auth/administration/signup',adminSignUp)
 
app.listen(PORT,()=>{
    console.log(`the server is running on ${PORT}`);
    
})