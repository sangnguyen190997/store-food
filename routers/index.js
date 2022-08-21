const express = require("express")
const menuDetailRouter = require("./menudetail")
const menuRouter = require("./menus")
const orderRouter = require("./orders")
const storeRouter = require("./stores")
const userRouter = require("./users")

const rootRouter = express.Router()

rootRouter.use("/users", userRouter)
rootRouter.use("/stores", storeRouter)
rootRouter.use("/menus", menuRouter)
rootRouter.use("/menudetail", menuDetailRouter)
rootRouter.use("/order", orderRouter)

module.exports = rootRouter