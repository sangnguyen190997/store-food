const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const { AUTH } = require("../../config");

const hashPassWord = (password) => {
    const salt = bcrypt.genSaltSync(10);
    const passwordHashed = bcrypt.hashSync(password, salt)
    return passwordHashed
}

const comparePassWord = (password, passwordHashed) => {
    const isMatch = bcrypt.compareSync(password, passwordHashed)
    return isMatch
}

const genToken = (data) => {
    const token = jwt.sign(data, AUTH.SECRET_KEY, {expiresIn: "1d"})
    return token
}

const decodeToken = (token) => {
    const decode = jwt.verify(token, AUTH.SECRET_KEY)
    return decode
}

module.exports = {
    hashPassWord,
    comparePassWord,
    genToken,
    decodeToken
}