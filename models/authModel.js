import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
});

const Auth = mongoose.model("Auth", authSchema);

export default Auth;
