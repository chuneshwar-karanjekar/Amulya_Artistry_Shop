import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const conn = await mongoose.createConnection(process.env.MONGO_URL);
        console.log(`Connected To MongoDB Database`);
        
    } catch (error) {
        console.log(`Error in MongoDB ${error}`)
    }
};

export default connectDB;