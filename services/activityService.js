const activityClass =  require('../models/activity')

const fetchAllActivity = async () => {
    try{
        return response = await activityClass.find({})
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

module.exports = {
    fetchAllActivity,
    fetchActivityByCategory
}