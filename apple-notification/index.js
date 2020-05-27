const notify = require('./notify')
const {fetchUserByCategory} = require('../services/userService')

const notifySubscriber = async (activities) => {
  activities.forEach( async activity => {
    activity.activity_category.forEach( async category => {
      const users = await fetchUserByCategory(category)
      users.forEach(user => {
        notify(user.deviceId, activity.title)
      })
    })
  })
}

const notifying = (item) => {
  console.log(`notif called and item is ${item}`)
}

module.exports = notify