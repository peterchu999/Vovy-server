
const mongoose = require('mongoose')
const activitySchema = new mongoose.Schema({
    title: String,
    image: String,
    description: Array,
    additional_information: String,
    registration_deadline: Date,
    schedule: {
        start_date: Date,
        end_date: Date
    },
    website_link: String,
    activity_category: Array,
    englishNeeded: Boolean
})

module.exports = mongoose.model('Activity',activitySchema)