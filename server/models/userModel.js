import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} } //manage users cart
}, { minimize: false }) //if we don't add this false in that case cart data will not created because we have not provided data here.

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;