const express = require("express")
const { orderFood, getOrderFoodById } = require("../../services/orders")


const orderRouter = express.Router()

orderRouter.post("/create-order", async(req,res) => {
    const {userId, orderDetailId, totalPrice} = req.body

    const data = await orderFood({userId, orderDetailId, totalPrice})

    if(data){
        return res.status(200).send(data)
    }

    res.status(500).send("Can't create order")
})

orderRouter.get("/:id", async(req,res) => {

    const {id} = req.params
    const data = await getOrderFoodById(id)

    if(data){
        return res.status(200).send(data)
    }

    res.status(500).send("Can't get order by id")
})
module.exports = orderRouter