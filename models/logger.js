
const mongoose = require('mongoose')
const logSchema = new mongoose.Schema({
    time: String,
    dataChanges: Array
})

module.exports = mongoose.model('Log',logSchema)