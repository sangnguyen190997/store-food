const {Menu, Store} = require("../../models")
const { Op } = require("sequelize");



const createMenu = async(data) => {
    try{
        const createMenu = await Menu.create(data)
        return createMenu
    } catch(error){
        console.log({error})
    }
}

const getMenuById = async(id) => {
    try{
        const getMenuById = await Menu.findOne({
            where: {
                id
            },
            include: [
                {
                    model: Store,
                    as: "stores",
                }
            ]
        })

        return getMenuById
    } catch(error){
        console.log({error})
    }
}

const getListMenu = async() => {
    try{
        const listMenu = await Menu.findAll()
        return listMenu
    }catch(error){
        console.log({error})
    }
}

module.exports = {
    createMenu,
    getMenuById,
    getListMenu
}