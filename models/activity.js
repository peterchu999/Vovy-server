
const mongoose = require('mongoose')
const activitySchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    additional_information: Array,
    registration_deadline: String,
    start_date: String,
    end_date: String,
    website_link: String,
    activity_category: Array,
    englishNeeded: Boolean,
    source: String
})

module.exports = mongoose.model('Activity',activitySchema)