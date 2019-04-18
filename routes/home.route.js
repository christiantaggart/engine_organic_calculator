const router = require('express').Router()


router.route('/')
    .get((req, res, next) => {
        res.send(all)
    })

module.exports = router
