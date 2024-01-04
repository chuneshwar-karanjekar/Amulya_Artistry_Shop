import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const conn = await mongoose.createConnection(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        });
        console.log(`Connected To MongoDB Database ${conn.host}`);
        
    } catch (error) {
        console.log(`Error in MongoDB ${error}`)
    }
};

export default connectDB;