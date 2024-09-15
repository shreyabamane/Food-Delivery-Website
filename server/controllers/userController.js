import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";


const loginUser = async (req, res) => {

    const { email, password } = req.body;

    try {
        //user verification to check if a user with the specified email exists in the database.
        const user = await userModel.findOne({ email })

        //checking if an email exists during login.
        if (!user) {
            return res.json({ success: false, message: "User doesn't exist" })
        }

        //compares the provided password with the hashed password stored in the database to check if they match.
        const isMatch = await bcrypt.compare(password, user.password); //is a method from the bcrypt library used to compare a plain-text.
    } catch (error) {

    }
}

//The token can be used to authenticate and authorize the user in subsequent requests to the server.
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        //Check if a user with the given email already exists in the database
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        //validate email
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter valid email" })
        }

        //validate password length
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }

        //Generate salt and hash password
        const salt = await bcrypt.genSalt(10) // Creates a random string (salt) to ensure unique hashes.
        const hashedPassword = await bcrypt.hash(password, salt) //Hashes the password using the salt, producing a secure, hashed password.

        //create new user instance
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        })

        const user = await newUser.save() //save user in the database

        const token = createToken(user._id) //generates a JWT token for the user
        res.json({ success: true, token }) //send token as response

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

export { loginUser, registerUser }