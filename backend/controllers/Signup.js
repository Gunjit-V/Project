const User = require("../models/User")

const signup = async (req, res) => {
    const { rollNumber, password } = req.body

    try {
        const existingUser = await User.findOne({ rollNumber })
        if (existingUser) {
            return res.status(400).json({ message: 'Already registerd.' })
        }
        const newUser = new User({
            rollNumber,
            password
        })

        await newUser.save()

        return res.status(201).json({ message: 'Registered Successfully.' })
    }

    catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Something went wrong." })
    }
}

module.exports = { signup }