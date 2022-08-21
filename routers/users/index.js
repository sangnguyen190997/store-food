const express = require("express")
const { hashPassWord, comparePassWord, genToken } = require("../../services/auth")
const { createUSer, getUserName, deleteUserById, updateUserById, getUserById } = require("../../services/users")

const userRouter = express.Router()


userRouter.get("/", async(req, res) =>{
    const data = await getUserName();

    if(data){
        return res.status(200).send(data)
    }

    res.status(404).send("Can't load list user")
})

userRouter.get("/:id", async(req,res) =>{
    const {id} = req.params

    const data = await getUserById(id)

    if(data){
       return res.status(200).send(data)
    }

    res.status(404).send("Can't find user")
})

userRouter.post("/register", async(req, res) =>{
    const {userName,userPassWord,firstName,lastName,phone,address} = req.body

    const passwordHashed = hashPassWord(userPassWord)
    const data = await createUSer({userName,userPassWord:passwordHashed,firstName,lastName,phone,address})

    cloneData = Object.assign({}, data)
    delete cloneData.dataValues.userPassWord
    
    
    if(!data){  
        res.status(500).send("Can't create user")
    }

    res.status(200).send({cloneData})
    
})


userRouter.post("/login", async(req, res) =>{
    const {userName, userPassWord} = req.body

    const data = await getUserName(userName)
    
    if(!data){
        res.status(400).send("UserName is invalid")
    }

    const isLoginSuccess = comparePassWord(userPassWord, data.userPassWord)

    if(!isLoginSuccess){
        res.status(400).send("Password is invalid")
    }

    const token = genToken({id: data.id})

    res.status(200).send({data, token})

})

userRouter.delete("/:id", async(req, res) => {
    const {id} = req.params;

    const data = await deleteUserById(id)

    if(!data){
        res.status(404).send("Can't find data")
    }

    res.status(200).send(`Delete user id: ${id} succesfully`)

})

userRouter.put("/:id", async(req,res) => {
    const {id} = req.params
    const {userName,userPassWord,firstName,lastName,phone,address} = req.body

    const passwordHashed = hashPassWord(userPassWord)


    if(!userName){
        res.status(404).send("Username is required")
    }

    const data = {userName,userPassWord:passwordHashed,firstName,lastName,phone,address}

    if(data){
        const userUpdated =  await updateUserById(id, data)
        res.status(200).send(data)
    }
    
})

module.exports = userRouter





