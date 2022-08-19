const router = require('express').Router()
const Order = require('../DatabseModal/orderDetail')
router.post('/', (req, res) => {
   
    const id = req.body.id
    const items = req.body.items
    if(items.length===0){
       console.log("No item Selected")
    }
    else{
        const serviceList = items.map(object => object.name)
        const description = items.map(object => object.description)
        newOrder = new Order({
            orderInfo: {
                itemList: serviceList,
                detail: description,
                totalPrice: req.body.totalprice,
                totalTime: req.body.totaltime,
                serviceName: req.body.servicename,
            },
            customerId: id
        }).save().then((result)=>{
            res.status(200).send(JSON.stringify('cart successfully'))
        }).catch((error)=>{
            res.status(401).send(JSON.stringify("Error in order"))
        })
    }
   
    
   
})
module.exports = router