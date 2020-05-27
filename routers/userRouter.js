const express = require('express')
const router = express.Router({mergeParams: true})

const userController = require('../controllers//userController')

router.post('/', userController.makeUser)
router.post('/:uuid', userController.editUser)


module.exports = router