const logClass =  require('../models/logger')

const loggger = async (activities) => {
    try {
        return await logClass.create({
            time: (new Date()).toLocaleString(),
            dataChanges: activities
        })
    } catch (err) {
        throw err
    }
}

module.exports = {
    loggger
}