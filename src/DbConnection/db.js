import mongoose from "mongoose";

const DB = async () => {
    try {
        // Connect to MongoDB using Mongoose
        const connectionDB = await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
           
        });

        if (connectionDB) {
            console.log("---***Database Connected Successfully***---");
        }
    } catch (error) {
        console.error('Database Connection error:', error.message);
    }
}

export default DB;
