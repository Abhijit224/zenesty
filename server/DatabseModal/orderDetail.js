const express = require('express')
const mongoose = require('mongoose')
const orderDetailSchema = mongoose.Schema({
    orderInfo: {
        itemList: {
            type: Array
        },
        totalPrice: {
            type: Number
        },
        serviceName: {
            type: String
        }
    },
    customerDetail: {
        customerId: {
            type: mongoose.Schema.Types.ObjectId
        }
    },
    orderDate:{
        type:"Date",
        default:Date.now
    }
})
const Order=mongoose.model('order',orderDetailSchema);
module.exports=Order