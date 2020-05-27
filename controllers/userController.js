const status = require('../constants/status')
const {createUser, updateUser} = require('../services/userService')

const makeUser = async (req, res) => {
    try{
        console.log(res.body)
        const {uuid,deviceId, category = [], name = "not defined"} = req.body
        if(!uuid || !deviceId) {
            throw new Error("must have uuid and deviceId")
        }
        await createUser({
            uuid,
            category,
            name,
            deviceId
        })
        console.log({
            ...status.SUCCESS,
            message: "Create User Success"
        })
        res.json({
            ...status.SUCCESS,
            message: "Create User Success"
        })
    } catch(err){
        console.log({
            ...status.ERROR,
            message: err
        })
        res.json({
            ...status.ERROR,
            message: err
        })
    }
    res.end()
}

const editUser = async (req, res) => {
    try{
        const {uuid} = req.params
        const {deviceId, category, name = "not defined"} = req.body
        if(!deviceId || !category){
            throw new Error('must have deviceId and category')
        }
        await updateUser(uuid, {
            deviceId,
            category,
            name
        })
        console.log({
            ...status.SUCCESS,
            message: "Create User Success"
        })
        res.json({
            ...status.SUCCESS,
            message: "Update User Success"
        })
    } catch (err) {
        console.log({
            ...status.ERROR,
            message: err
        })
        res.json({
            ...status.ERROR,
            message: err
        })
    }
}


module.exports = {
    makeUser,
    editUser
}