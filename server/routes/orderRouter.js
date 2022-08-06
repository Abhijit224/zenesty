const router = require('express').Router()
const user = require('../DatabseModal/userModel')
const Order = require('../DatabseModal/orderDetail')
router.post('/basic', async (req, res) => {

 const item = req.body.itemlist
 const servicelist = item.map(object => object.name)
 await user.findOne({ userEmail: req.body.email })
  .then((result) => {
   if (!result) {
    res.status(401).send('user not found')
   }
   else {

    const newOrder = new Order({
     orderInfo: {
      itemList: servicelist,
      totalPrice: req.body.price,
      serviceName: req.body.servicename
     },    
      customerId: result._id,
    })
     .save()
     .catch((error) => {
      console.log(error)
     })
    res.status(200).send(JSON.stringify('order is successfuly  in cart'))
   }
  })

})
module.exports = router