const express = require("express")
const { createMenuDetail, getListMenuDetail } = require("../../services/menudetail")
const { createMenu, getMenuById, getListMenu } = require("../../services/menus")


const menuRouter = express.Router()

menuRouter.post("/create-menu", async(req, res) =>{
    const {name, storeId, ngay} = req.body

    const data = await createMenu({name, storeId, ngay})

    if(data){
        return res.status(200).send(data)
    }

    res.status(500).send("Can't create menu")
})

menuRouter.get("/:id", async(req,res) => {
    const {id} = req.params


    const data = await getMenuById(id)


    if(data){
        return res.status(200).send(data)
    }

    res.status(500).send("Can't get menu")
})

menuRouter.get("/", async(req, res) => {
    const listMenu = await getListMenu()

    if(!listMenu){
        return res.status(500).send("Can't get list menu")
    }

    res.status(200).send({listMenu})
})



module.exports = menuRouter