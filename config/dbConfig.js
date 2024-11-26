import mongoose from "mongoose";

async function connectDB() {
    let db = await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to " + db.connection.name);

    db.connection.on("error", (err) => {
        console.error(err);
    });
}

export default connectDB;
