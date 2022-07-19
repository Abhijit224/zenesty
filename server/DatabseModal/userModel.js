const mongoose=require('mongoose')
const userShema= new mongoose.Schema({
    googleId:{
        type:String
    },
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    userEmail:{
        type:String
    },
    userMobile:{
        type:String
    },
    userAddress:{
        type:String
    },
    userPassword:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
})
const User=mongoose.model('user',userShema)
module.exports=User