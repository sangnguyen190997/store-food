const express = require("express")
const { createMenuDetail, getListMenuDetail, getListMenuDetailById } = require("../../services/menudetail")
const { createStore } = require("../../services/stores")

const menuDetailRouter = express.Router()

menuDetailRouter.post("/create-menudetail", async(req,res) =>{
    const {name, description, price, menuId} = req.body

    const data = await createMenuDetail({name, description, price, menuId});

    if(data){
        return res.status(200).send(data)
    }

    res.status(500).send("Can't create menu detail")

})

menuDetailRouter.get("/:id", async(req, res) => {
    const {id} = req.params
    const data = await getListMenuDetailById(id)

    if(!data){
        return res.status(500).send("Can't get list menu detail by id")
    }

    res.status(200).send({data})
})

menuDetailRouter.get("/", async(req,res) => {
    const data = await getListMenuDetail();

    if(!data){
        return res.status(500).send("Can't get list menu detail")
    }

    res.status(200).send({data})
})



module.exports = menuDetailRouter