import orderModel from '../models/orders.js'

// orderName,orderDate,modelNo,partyName,size,pkgQty,material,feature1BaseFeature,feature2Extra,feature3Mechanical,numberType,NP,copper,GP,otherColorIndex,department

class orderController{
    static createOrder=async (req,res)=>{
        const {orderName,modelNo,partyName,size,pkgQty,material,feature1BaseFeature,feature2Extra,feature3Mechanical,numberType,NP,copper,GP,otherColorIndex,department}=req.body
        if(orderName&&modelNo&&partyName&&size&&pkgQty&&department){
            try {
                const newOrder=new orderModel({
                    orderName:orderName,
                    modelNo:modelNo,
                    partyName:partyName,
                    size :size,
                    pkgQty:pkgQty,
                    material:material,
                    feature1BaseFeature:feature1BaseFeature,
                    feature2Extra:feature2Extra,
                    feature3Mechanical:feature3Mechanical,
                    numberType:numberType,
                    NP:NP,
                    copper:copper,
                    GP:GP,
                    otherColorIndex:otherColorIndex,
                    department:department,
                })
                await newOrder.save()
                res.send({"status":"Success","message":"Order sucessfully created..."})      
            } catch (error) {
                res.send({"status":"failed","message":"Unable to create order...."})   
            }
            
        }
        else{
            res.send({"status":"failed","message":"Necessary fields are required ...."})                
        }
        
    }
    static updateOrder=async (req,res)=>{
        const {id,orderName,modelNo,partyName,size,pkgQty,material,feature1BaseFeature,feature2Extra,feature3Mechanical,numberType,NP,copper,GP,otherColorIndex,department}=req.body
        try {
            await orderModel.findByIdAndUpdate(id,{$set:{
                orderName:orderName,
                modelNo:modelNo,
                partyName:partyName,
                size :size,
                pkgQty:pkgQty,
                material:material,
                feature1BaseFeature:feature1BaseFeature,
                feature2Extra:feature2Extra,
                feature3Mechanical:feature3Mechanical,
                numberType:numberType,
                NP:NP,
                copper:copper,
                GP:GP,
                otherColorIndex:otherColorIndex,
                department:department}})
            res.send({"status":"Success","message":"Order sucessfully created..."})      
        } catch (error) {
            res.send({"status":"failed","message":"Unable to create order...."})   
        } 
    }
    static deleteOrder=async (req,res)=>{
        const {id}=req.body
        try {
            await orderModel.findByIdAndDelete(id)
            res.send({"status":"success","message":"delete order successfully..."})
        } catch (error) {
            res.send({"status":"failed","message":"Unable to delete order...."})
        }
    }
    static getAllOrder=async (req,res)=>{
        try {
            const orders=await orderModel.find()
            res.send({"status":"success","orders":orders})
        } catch (error) {
            res.send({"status":"failed","message":"Failed to get all orders ...."})
        }
    }
    static filterByValue=async (req,res)=>{
        try {
            const orders=await orderModel.find(req.body) 
            res.send({"status":"success","orders":orders})       
        } catch (error) {
            res.send({"status":"failed","message":"Failed to filter orders ...."})
        }
        
    }
    static filterByInterval=async (req,res)=>{
        const {attribute,intial_value,final_value}=req.body
    }
}

// export
export default orderController;