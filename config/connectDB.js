import mongoose from 'mongoose'

const connectDB=async(DATABASE_URL)=>{
    try {
        const DB_OPTIONS={
            useNewUrlParser:true
        }
        mongoose.set('strictQuery', false);
        mongoose.connect(DATABASE_URL,DB_OPTIONS)
        console.log("connected successfully on mongoDB Atlas ....")   
    } catch (error) {
        console.log(error)
    }
}

export default connectDB