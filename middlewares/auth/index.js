const { decodeToken } = require("../../services/auth")
const { getUserById } = require("../../services/users")

const authenticate = async (req, res,next) => {
    try{
        const token = req.header("Authorization").replace("Bearer ", "")

        const data = decodeToken(token)
        const user = await getUserById(data.id)

        req.user = user
        next()
    } catch(error){
        return res.status(500).send("Server error")
    }
}

module.exports = {
    authenticate
}