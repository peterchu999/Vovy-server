const express = require('express')
const router = express.Router({mergeParams: true})

const activityController = require('../controllers/activityController')

router.get('/', activityController.getAllActivity)
router.get('/:categories', activityController.getActivityByCategory)

module.exports = router