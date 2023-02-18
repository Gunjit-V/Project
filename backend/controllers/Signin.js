const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signin = async (req, res) => {
    const { rollNumber, password } = req.body;

    try {
        const existingUser = await User.findOne({ rollNumber });
        if (!existingUser) {
            return res.status(401).json({ message: "Invalid user" });
        }

        const passwordMatch = () => {
            return password === existingUser.password;
        };
        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid email or password." });
        }
        const token = jwt.sign({ id: existingUser._id }, "secret");
        res.cookie("token", token, {
            httpOnly: true,
        });

        return res.status(200).json({ message: "Signed in." });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong." });
    }
};

module.exports = signin;
