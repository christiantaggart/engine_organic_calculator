const router = require('express').Router()


router.route('/')
    .get((req, res, next) => {
        res.send("upload.route.js")
    })

module.exports = router

