const {User} = require("../../models")

const getListUser = async () => {
    try{
        const listUser = await User.findAll()

        return listUser
    } catch(error){
        console.log({error})
    }
}

const getUserById = async (id) => {
    try{
        const user = await User.findOne({
            where : {
                id
            },
            include: [
                {
                    model: User,
                    as: "users"
                }
            ]
        })

        return user
    } catch(error){
        console.log({error})
    }
}

const createUSer = async (data) => {
    try{
        const user = await User.create(data)
        return user
    } catch(error){
        console.log({error})
    }
}

const getUserName = async (username) =>{
    try{
        const userName = await User.findOne({
            where : {
                username
            }
        })

        return userName
    }catch(error){
        console.log({error})
    }
}

const deleteUserById = async (id) => {
    try {
      const user = await User.destroy({
        where: {
          id,
        },
      });
      return user;
    } catch (errors) {
      return null;
    }
  };

const updateUserById = async (id, data) => {
    try{
        const userUpdated = await User.update(data, {
            where : {
                id
            }
        })

        return userUpdated
    }catch(error){
        console.log({error})
    }
}
module.exports = {
    createUSer,
    getUserName,
    deleteUserById,
    updateUserById,
    getListUser,
    getUserById
}