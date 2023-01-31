import orderModel from '../models/orders.js'

// orderName,orderDate,modelNo,partyName,size,pkgQty,material,feature1BaseFeature,feature2Extra,feature3Mechanical,numberType,NP,copper,GP,otherColorIndex,department,extraQtyPercentage

class orderController{
    static createOrder=async (req,res)=>{
        const {orderName,modelNo,partyName,size,pkgQty,material,feature1BaseFeature,feature2Extra,feature3Mechanical,numberType,NP,copper,GP,otherColorIndex,department,extraQtyPercentage}=req.body
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
                    extraQtyPercentage:extraQtyPercentage
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
    static dynamicFilters=async (req,res)=>{
        try {
            const filters = {};
            for (const key in req.query) {
                if (req.query[key].includes(',')) {
                    const values = req.query[key].split(',');
                    filters[key] = { $gt: values[0], $lt: values[1] };
                } else if (req.query[key]) {
                    filters[key] = req.query[key];
                }
            }
            const orders=await orderModel.find(filters) 
            res.send({"status":"success","orders":orders})       
        } catch (error) {
            res.send({"status":"failed","message":"Failed to filter orders ...."})
        }
        
    }
    
}

// export
export default orderController;