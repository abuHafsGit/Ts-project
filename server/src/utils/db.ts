
import mongoose from "mongoose";

const connectDb: () => Promise<void> = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test')
        console.log('db conncet')
    } catch (error: any) {
        console.log(error.message)
    }
}

export default connectDb