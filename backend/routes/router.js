const express = require("express")
const router = express.Router()
const signout = require("../controllers/Signout")
const signin = require("../controllers/Signin")
const { signup } = require("../controllers/Signup")
const booking = require('../controllers/booking')

router.post('/signup', signup)
router.post('/signin', signin)
router.get('/signout', signout)
router.post('/book', booking)


module.exports = router