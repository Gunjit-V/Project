const mongoose = require('mongoose')

const roomSchema = mongoose.Schema({
    roomNumber: Number,
    rollNumber: Number,
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room
