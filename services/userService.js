const userClass = require('../models/user')

const fetchAllUser = async () => {
    try{
        return response = await userClass.find({})
    } catch (err) {
        throw err
    }
}

const fetchUserByCategory = async (category) => {
    try {
        return response = await userClass.find({category})
    } catch (err) {
        throw err
    }
}

const createUser = async (user) => {
    try {
        return response = await userClass.create(user)
    } catch (err) {
        throw err
    }
}

const updateUser = async (uuid, newUser) => {
    try {
        console.log(uuid, newUser)
        return response = await userClass.updateOne({uuid},{...newUser, uuid})
    } catch (err) {
        throw err
    }
}


module.exports = {
    fetchAllUser,
    fetchUserByCategory,
    createUser,
    updateUser
}