const {MenuDetail, Menu} = require("../../models")

const createMenuDetail = async (data) => {
    try{
        const menuDetail = await MenuDetail.create(data)
        return menuDetail
    }catch(error){
        console.log({error})
    }
}

const getListMenuDetailById = async (id) => {
    try{
        const menuDetailId = await MenuDetail.findOne({
            where: {
                id
            },
            include: [{
                model: Menu,
                as: "menus"
            }]
        })
        return menuDetailId
    }catch(error){
        console.log({error})
    }
}

const getListMenuDetail = async () => {
    try{
        const getListMenuDetail = await MenuDetail.findAll({
            include: [{
                model: Menu,
                as: "menus"
            }]
        })
        
        return getListMenuDetail
    }catch(error){
        console.log({error})
    }
}

module.exports = {
    createMenuDetail,
    getListMenuDetail,
    getListMenuDetailById
}