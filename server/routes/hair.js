const router = require('express').Router()
const Order = require('../DatabseModal/orderDetail')
router.post('/',(req,res)=>{
const id=req.body.id
const items=req.body.items
const serviceList=items.map(object => object.name)
const description=items.map(object =>object.description)
console.log(description)
newOrder =new Order({
    orderInfo:{
    itemList:serviceList,
    detail:description,
    totalPrice:req.body.totalprice,
    totalTime:req.body.totaltime,
    serviceName:req.body.servicename,
    },
    customerId:id
})
console.log(newOrder)
})
module.exports = router