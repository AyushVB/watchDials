import clientModel from "../models/clients.js"

// name,email,phoneNo,address,city,state,country,frequentOrderType

class clientController{
    static addClient=async (req,res)=>{
        const {name,email,phoneNo,address,city,state,country,frequentOrderType}=req.body
        if(!(name&&email&&phoneNo&&address&&city&&state&&country)){
            res.send({"status":"failed","message":"Necessary fields are required ....","Necessary fields":"name,email,phoneNo,address,city,state,country"
            })    
        }
        else{
            try {
                const newClient=new clientModel({
                    name:name,
                    email:email,
                    phoneNo:phoneNo,
                    address:address,
                    city:city,
                    state:state,
                    country:country,
                    frequentOrderType:frequentOrderType
                    
                })
                await newClient.save()
                res.send({"status":"Success","message":"Client sucessfully added..."})      
            } catch (error) {
                res.send({"status":"failed","message":"Unable to add client...."})   
            }                            
        }
        
    }
    static updateClient=async (req,res)=>{
        const {id,name,email,phoneNo,address,city,state,country,frequentOrderType}=req.body
        try {
            await clientModel.findByIdAndUpdate(id,{$set:{
                name:name,
                email:email,
                phoneNo:phoneNo,
                address:address,
                city:city,
                state:state,
                country:country,
                frequentOrderType:frequentOrderType
            }})
            res.send({"status":"Success","message":"client sucessfully updated..."})      
        } catch (error) {
            res.send({"status":"failed","message":"Unable to update client...."})   
        } 
    }
    static deleteClient=async (req,res)=>{
        const id=req.query.id
        try {
            await clientModel.findByIdAndDelete(id)
            res.send({"status":"success","message":"delete client successfully..."})
        } catch (error) {
            res.send({"status":"failed","message":"Unable to delete client...."})
        }
    }
    static getAllClients=async (req,res)=>{
        try {
            const clients=await clientModel.find()
            res.send({"status":"success","orders":clients})
        } catch (error) {
            res.send({"status":"failed","message":"Failed to get all orders ...."})
        }
    }
}

export default clientController;
