"use strict"
const express = require("express")
const {sequelize} = require("./models")

const rootRouter = require("./routers")


const app = express()


app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello VDD")
})

app.use("/api", rootRouter)

sequelize
    .authenticate()
    .then(() =>{
        console.log("Connection has established successfully")
    })
    .catch((err) => {
        console.log("Unable connect to database")
    })


const port = 3000;
app.listen(port, () =>{
    console.log(`App listening on ${port}`)
})