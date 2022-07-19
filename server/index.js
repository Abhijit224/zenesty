const express = require('express')
const cors=require('cors')
const bodyParser= require('body-parser')
const cookieParser=require('cookie-parser')
const mongoose=require('mongoose')
const path=require('path')
const { response } = require('express')
require('dotenv').config()
const app=express()
const connection=process.env.mongodb_url
//Router Init
const userRouter=require('./routes/userRouter')
//Setting Router
app.use('/user',userRouter)

app.listen(process.env.PORT,(error)=>{
    if(!error){
        mongoose.connect(connection,{
            useNewUrlParser:true,
            useUnifiedTopology:true
     })
     .then(
        console.log("Database is connected")
     )
    }
    else{
        response.json('Database not connected')
        console.log(error)
    }
})