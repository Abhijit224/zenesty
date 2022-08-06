const router = require('express').Router()
const jwt = require('jsonwebtoken')
const Order=require('../DatabseModal/orderDetail')
router.get('/:id',(req, res) => {
    const id=req.params.id
    Order.find({
       customerId:id 
    })
    .then((result)=>{
        res.status(200).send(JSON.stringify(result))
    })
    .catch((error)=>{
        res.status(401).send(JSON.stringify('No cart available'))
    })
    
})

function verifyToken(req,res,next){
    let token=req.headers.authorization
    if(!req.headers.authorization){
     return res.status(401).send('Unauthorizaed request')
    }
    jwt.verify(token, 'avorika_json_token', function(err, decoded) {
        console.log(decoded) // bar
      });
    
   
    next();
}
module.exports = router