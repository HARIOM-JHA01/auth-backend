import Auth from "../models/authModel.js";

async function signup(req, res) {
    const { username, email, password } = req.body;

    if (!username) {
        return res.status(400).send("Username is required");
    }

    if (!email) {
        return res.status(400).send("Email is required");
    }

    if (!password) {
        return res.status(400).send("Password is required");
    }

    try {
        const user = new Auth({
            username,
            email,
            password,
        });

        await user.save();

        res.send("User created successfully");
    } catch (error) {
        console.error(error);
        res.send("An error occurred. Please try again later.");
    }
}

async function login(req, res) {
    const { email, password } = req.body;

    if (!email) {
        return res.status(400).send("Email is required");
    }

    if (!password) {
        return res.status(400).send("Password is required");
    }

    try {
        const user = await Auth.find({ email });

        if (user.length === 0) {
            return res.status(404).send("User not found");
        }

        if (user[0].password !== password) {
            return res.status(401).send("Invalid password");
        }

        res.send("User logged in successfully");
    } catch (error) {
        console.error(error);
        res.send("An error occurred. Please try again later.");
    }
}

export { signup, login };
