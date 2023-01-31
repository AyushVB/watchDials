import mongoose from "mongoose";

// Defination Schema
const orderSchema=new mongoose.Schema({
    orderName:{type:String ,required:true ,trim:true},
    orderDate:{type:Date ,default: Date.now },
    modelNo:{type:Number ,required:true },
    partyName:{type:String ,required:true ,trim:true},
    size :{type:Number ,required:true },
    pkgQty:{type:Number ,required:true },
    material:{type:String ,required:true ,trim:true},
    feature1BaseFeature:{type:String ,trim:true,default:null},
    feature2Extra:{type:String,trim:true,default:null},
    feature3Mechanical:{type:String ,trim:true,default:null},
    numberType:{type:String ,trim:true,default:null},
    NP:{type:Number  ,default:0},
    copper:{type:Number ,default:0 },
    GP:{type:Number ,default:0 },
    otherColorIndex:{type:Number ,default:0},
    department:{type:String ,required:true ,trim:true},
})

// Model
const orderModel=mongoose.model("order",orderSchema)

export default orderModel