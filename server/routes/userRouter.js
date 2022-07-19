const router= require('express').Router()
const bcrypt=require('bcrypt')
const salt=bcrypt.genSalt(10)
const jwt=require('jsonwebtoken')
const User=require('../DatabseModal/userModel')
// router.get('/',(req,res)=>{
//     res.send('User Router')
// })
router.get('/:email',async(req,res)=>{
await User.findOne({userEmail:req.params.email})
.then((result)=>{
    if(result==null){
        res.status(404)
    }
    else{
        console.log(result)
        res.send(result)
    }
})
.catch((error)=>{
    console.log(error)
})
})
module.exports=router