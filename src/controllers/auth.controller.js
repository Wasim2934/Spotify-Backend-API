const userModel = require('../models/user.model');
const JWT = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


const registerUser = async (req, res) => {
    const { username, email, password, role = 'user' } = req.body;

    const isUserAlreadyExist = await userModel.findOne({
        $or: [{ username }, { email }]
    })

    if (isUserAlreadyExist) {
        res.status(409).json({ message: "User already exists" })
    }

    const hash = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username,
        email,
        password: hash,
        role
    })

    const token = JWT.sign({
        id: user._id,
        role: user.role,
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message: "User registered successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
        }
    })

}

const loginUser = async (req, res) => {
    const { username, email, password } = req.body;

    const user = await userModel.findOne({
        $or: [{ username }, { email }]
    })

    if (!user) {
        res.status(401).json({ message: "Invalid credentials" })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
        res.status(401).json({ message: "Invalid credentials" })
    }

    const token = JWT.sign({
        id: user._id,
        role: user.role,
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(200).json({
        message: "User logged in successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
        }
    })

}

const logoutUser = async (req, res) => {
    res.clearCookie("token")
    res.status(200).json({ message: "User logged out successfully" })
}

module.exports = { registerUser, loginUser, logoutUser }