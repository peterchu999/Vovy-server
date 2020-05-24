const logClass =  require('../models/logger')

const log = async (activities) => {
    try {
        return response = await logClass.create({
            time: (new Date()).toLocaleString(),
            dataChanges: activities
        })
    } catch (err) {
        throw err
    }
}

module.exports = {
    log
}