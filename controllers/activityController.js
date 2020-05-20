const status = require('../constants/status')
const activityService = require('../services/activityService')

const getAllActivity = async (req, res) => {
    try{
        const datas = await activityService.fetchAllActivity()
        res.json({
            ...status.SUCCESS,
            data: datas
        })
    } catch(err){
        res.json({
            ...status.ERROR,
            data: null
        })
    }
    res.end()
}

const getActivityByCategory = async (req, res) => {
    const {categories} = req.params
    try{
        const datas = await activityService.fetchActivityByCategory(categories)
        res.json({
            ...status.SUCCESS,
            data: datas
        })
    } catch(err){
        res.json({
            ...status.ERROR,
            data: null
        })
    }
    res.end()
}

module.exports = {
    getAllActivity,
    getActivityByCategory
}