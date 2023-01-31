import mongoose from "mongoose";

// Defination Schema
const clientSchema=new mongoose.Schema({
    name:{type:String ,required:true ,trim:true},
    email:{type:String ,required:true ,trim:true},
    phoneNo:{type:String ,required:true ,trim:true},
    address:{type:String ,required:true ,trim:true },
    city:{type:String ,required:true ,trim:true},
    state:{type:String ,required:true ,trim:true},
    country:{type:String ,required:true ,trim:true},
    frequentOrderType:{type:String ,trim:true,default:null },
})

// Model
const clientModel=mongoose.model("client",clientSchema)

export default clientModel