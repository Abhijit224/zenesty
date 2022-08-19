const router = require('express').Router()
const jwt = require('jsonwebtoken')
const Order = require('../DatabseModal/orderDetail')
const User= require('../DatabseModal/userModel')
router.get('/:id', (req, res) => {
    const id = req.params.id
    Order.find({
        customerId: id
    })
        .then((result) => {
            res.status(200).send(JSON.stringify(result))
        })
        .catch((error) => {
            res.status(401).send(JSON.stringify('No cart available'))
        })

})
router.get('/selectitem/:id', (req, res) => {
    Order.findById({_id:req.params.id})
    .then((result)=>{
        User.findById({_id:result.customerId}).then((customer)=>{
            res.status(200).send(JSON.stringify(result))
        })

       
    })
})
router.delete('/deleteitem/:id', (req, res) => {
    console.log(req.params.id)
    Order.deleteOne({ _id: req.params.id }).then((result) => {
        if (result.acknowledged === true) {
            console.log('item deleted...')
        }
        else {
            console.log(result)
        }

    })
})

function verifyToken(req, res, next) {
    let token = req.headers.authorization
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorizaed request')
    }
    jwt.verify(token, 'avorika_json_token', function (err, decoded) {
        console.log(decoded) // bar
    });


    next();
}
module.exports = router