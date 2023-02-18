const Room = require('../models/Room')
const { rollNumber } = require('../controllers/Signin')
const booking = (req, res) => {
    Room.create({ roomNumber: req.body.roomNumber, rollNumber: rollNumber }, (err, room) => {
        return res.json(room)
        if (err) return handleError(err)
    })
}

module.exports = booking