const express = require("express")
const { createStore, getListStore } = require("../../services/stores")

const storeRouter = express.Router()

storeRouter.post("/create-store", async(req,res) =>{
    const {name} = req.body

    const data = await createStore({name});

    if(data){
        return res.status(200).send(data)
    }

    res.status(500).send("Can't create store")

})

storeRouter.get("/", async(req,res) => {
    const stores = await getListStore()

    if(!stores){
        return res.status(500).send("Can't get list store")
    }

    res.status(200).send({stores})
})

storeRouter.delete("/:id", (req, res) => {
    const {id} = req.params

    if(!id){
        return res.status(500).send(`Can't delete store: ${id}`)
    }

    res.status(200).send(`Deleted store ${id} successfully`)
})

module.exports = storeRouter