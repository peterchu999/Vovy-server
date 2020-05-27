
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    uuid: String,
    deviceId: String,
    category: Array,
    name: String
})

module.exports = mongoose.model('User',userSchema)