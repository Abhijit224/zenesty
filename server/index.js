const express = require('express')
const cors=require('cors')
const bodyParser= require('body-parser')
const cookieParser=require('cookie-parser')
const mongoose=require('mongoose')
const path=require('path')
const { response } = require('express')
require('dotenv').config()
const app=express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())

const connection=process.env.mongodb_url
//Router Init
const userRouter=require('./routes/userRouter')
const orderRouter=require('./routes/orderRouter')
const cartRouter=require('./routes/cartRouter')
//Setting Router
app.use('/user',userRouter)
app.use('/offers',orderRouter)
app.use('/cart',cartRouter)


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