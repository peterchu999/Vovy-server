const express = require('express')
const router = express.Router()

router.get('*', (req, res) => {
    res.json({
        status: 404,
        message: "api not found"
    })
})

module.exports = router