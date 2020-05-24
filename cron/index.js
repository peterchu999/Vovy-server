const crawl = require('../dataCrawler')
const {log} = require('../services/cronLogger')
const notify = () => {} // stub
const {createActivity, fetchAllActivity, deleteAllActivity} = require('../services/activityService')
const cron = require('node-cron')


const getDiffData = (oldData, newData) => {
    const objectBaseData = getObjectMap(oldData)
    return newData.filter((data) => isCustomAttributeAvail(objectBaseData, data))
}

const getObjectMap = (objectArray) => {
    const newObject = {}
    objectArray.forEach(item => {
        console.log(`${item.registration_deadline.toString()}${item.activity_category.toString()}${item.title}`)
        newObject[`${item.registration_deadline.toString()}${item.activity_category.toString()}`] = item
    })
    return newObject
}

const isCustomAttributeAvail = (objectBaseData,object) => {
    return objectBaseData[`${object.registration_deadline.toString()}${object.activity_category.toString()}`] === undefined
}

const init = () => {
    cron.schedule('* 12,23 * * *', async() => {
        try{
            const currData = await fetchAllActivity() 
            const newData = await crawl()
            const updatedData =  getDiffData(currData, newData)
            notify(updatedData)
            log(updatedData)
            await deleteAllActivity()
            await createActivity(newData)
        } catch(err) {
            console.log(err)
        }   
    });
}

module.exports = init