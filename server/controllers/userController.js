import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";


const loginUser = async (req, res) => {

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
            name:name,
            email:email,
            password:hashedPassword
        })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

export { loginUser, registerUser }