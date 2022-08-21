const {Order, User} = require("../../models")

const orderFood = async(data) => {
    try{
        const createOrder = await Order.create(data)
        return createOrder
    }catch(error){
        console.log({error})
    }
}

const getOrderFoodById = async (id) => {
    try{
        const data = await Order.findOne({
            where: {
                id
            },
            include: [
                {
                    model: User,
                    as: "users"
                }
            ]
        })
        return data
    }catch(error){
        console.log({error})
    }
}

module.exports = {
    orderFood,
    getOrderFoodById
}