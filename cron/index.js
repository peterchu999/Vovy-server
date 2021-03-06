const crawl = require('../dataCrawler')
const {loggger} = require('../services/cronLogger')
const notifyUserWithActivity = require('../apple-notification')
const {createActivity, fetchAllActivity, deleteAllActivity} = require('../services/activityService')
const cron = require('node-cron')


const getDiffData = (oldData, newData) => {
    const objectBaseData = getObjectMap(oldData)
    return newData.filter((data) => isCustomAttributeNotAvail(objectBaseData, data))
}

const getObjectMap = (objectArray) => {
    const newObject = {}
    objectArray.forEach(item => {
        newObject[`${item.registration_deadline}${item.activity_category.toString()}${item.title}`] = item
    })
    return newObject
}

const isCustomAttributeNotAvail = (objectBaseData,object) => {
    return objectBaseData[`${object.registration_deadline}${object.activity_category.toString()}${object.title}`] === undefined
}

const init = async() => {
    // cron.schedule('0 12,18 * * *', async() => {
        try{
            const currData = await fetchAllActivity() 
            const newData = await crawl()
            const updatedData =  getDiffData(currData, newData)
            notifyUserWithActivity(newData)
            loggger(updatedData)
            await deleteAllActivity()
            await createActivity(newData)
        } catch(err) {
            console.log(err)
        }   
    // });
}

module.exports = init