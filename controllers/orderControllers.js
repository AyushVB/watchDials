import orderModel from '../models/orders.js'

// orderName,orderDate,modelNo,partyName,size,pkgQty,material,feature1BaseFeature,feature2Extra,feature3Mechanical,numberType,NP,copper,GP,otherColorIndex,department,extraQty,orderPicture,dialPicture

class orderController{
    static createOrder=async (req,res)=>{
        var {orderName,orderDate,modelNo,partyName,size,pkgQty,material,feature1BaseFeature,feature2Extra,feature3Mechanical,numberType,NP,copper,GP,otherColorIndex,department,extraQtyPercentage,orderPicture,dialPicture}=req.body
        if(!(orderName&&modelNo&&partyName&&size&&pkgQty&&department&&material&&numberType)){
            res.send({"status":"failed","message":"Necessary fields are required ....","Necessary fields":"orderName,modelNo,partyName,size,pkgQty,material,numberType,department"
            })      
        }
        else{
            try {
                if(!extraQtyPercentage)extraQtyPercentage=10
                if(orderDate)orderDate=new Date(orderDate)
                const extraQty=pkgQty*(1+extraQtyPercentage*(0.01));
                const newOrder=new orderModel({
                    orderName:orderName,
                    orderDate:orderDate,
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
                    extraQty:extraQty,
                    orderPicture:orderPicture,
                    dialPicture:dialPicture
                })
                await newOrder.save()
                res.send({"status":"Success","message":"Order sucessfully created..."})      
            } catch (error) {
                res.send({"status":"failed","message":"Unable to create order...."})   
            }       
        } 
    }
    static updateOrder=async (req,res)=>{
        var {id,orderName,orderDate,modelNo,partyName,size,pkgQty,material,feature1BaseFeature,feature2Extra,feature3Mechanical,numberType,NP,copper,GP,otherColorIndex,department,extraQty,orderPicture,dialPicture}=req.body
        try {
            if(orderDate)orderDate=new Date(orderDate)
            await orderModel.findByIdAndUpdate(id,{$set:{
                orderName:orderName,
                orderDate:orderDate,
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
                extraQty:extraQty,
                orderPicture:orderPicture,
                dialPicture:dialPicture
            }})
            res.send({"status":"Success","message":"Order sucessfully updated..."})      
        } catch (error) {
            res.send({"status":"failed","message":"Unable to update order...."})   
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
                    if(key==="orderDate"){
                        values[0]=new Date(values[0])
                        values[1]=new Date(values[1])
                    }    
                    filters[key] = { $gte: values[0], $lte: values[1] };
                } else if (req.query[key]) {
                    if(key==="orderDate"){
                        req.query.key=new Date(req.query.key)    
                    }    
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