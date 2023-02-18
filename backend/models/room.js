const mongoose = require('mongoose')

const roomSchema = mongoose.Schema({
    roomNumber: { type: Number, required: true },
    rollNumber: { type: Number }
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room
