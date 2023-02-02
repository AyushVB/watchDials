import express from "express"
import clientController from "../controllers/clientController.js";
import checkUserAuth from "../middlewares/auth-middleware.js";

const clientRoutes=express.Router();

// route level middleware
clientRoutes.post('/addClient',checkUserAuth)
clientRoutes.put('/updateClient',checkUserAuth)
clientRoutes.delete('/deleteClient',checkUserAuth)
clientRoutes.get('/getAllClients',checkUserAuth)

// protected routes
clientRoutes.post('/addClient',clientController.addClient)
clientRoutes.patch('/updateClient',clientController.updateClient)
clientRoutes.delete('/deleteClient',clientController.deleteClient)
clientRoutes.get('/getAllClients',clientController.getAllClients)

// export
export default clientRoutes