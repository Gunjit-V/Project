const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const Room = require('../models/room')

router.post('/user', (req, res) => {
    Room.create({ roomNumber: req.body.roomNumber, rollNumber: req.body.rollNumber }, (err, room) => {
        alert("Room booked")
        if (err) return handleError(err)
    })
})

module.exports = router