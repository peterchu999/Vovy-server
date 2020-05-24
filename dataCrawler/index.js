const indorelawanData = require('./indorelawan')
const {createActivity, fetchAllActivity} = require('../services/activityService')
const crawlData = async() => {
    return [
        ...await indorelawanData()
    ]
}


module.exports = crawlData