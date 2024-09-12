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
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

export { loginUser, registerUser }