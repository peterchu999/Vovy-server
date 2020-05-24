const activityClass =  require('../models/activity')

const fetchAllActivity = async () => {
    try{
        return response = await activityClass.find({}).select('-_id').exec()
    } catch(err) {
        throw err
    }
}

const fetchActivityByCategory = async (category) => {
    try{
        return response = await activityClass.find({activity_category: category})
    } catch(err) {
        throw err
    } 
}

const fetchActivity = async (activity) => {
    try{
        return response = await activityClass.find({activity})
    } catch(err) {
        throw err
    } 
}

const deleteAllActivity = async () => {
    try {
        return response = await activityClass.deleteMany({})
    } catch (err) {
        throw err
    } 
}

const createActivity = async (activity) => {
    try {
        return response = await activityClass.create(activity)
    } catch (err) {
        throw err
    }
}



module.exports = {
    fetchAllActivity,
    fetchActivityByCategory,
    deleteAllActivity,
    fetchActivity,
    createActivity
}