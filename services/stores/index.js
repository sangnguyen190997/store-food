const {Store} = require("../../models")

const createStore = async(data) =>{
    try{
        const store = await Store.create(data)
        return store
    }catch(error){
        console.log({error})
    }
}

const getListStore = async () => {
    try{
        const stores = await Store.findAll()
        return stores
    }catch(error){
        console.log({error})
    }
}

const deleteStore = async (id) => {
    try{
        const storeDeleted = await Store.destroy({
            where: {
                id
            }
        })

        return storeDeleted
    } catch(error){
        console.log({error})
    }
}
module.exports = {
    createStore,
    getListStore,
    deleteStore
}