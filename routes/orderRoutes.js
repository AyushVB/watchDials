import express from "express"
import orderController from "../controllers/orderControllers.js";
import checkUserAuth from "../middlewares/auth-middleware.js";

const orderRoutes=express.Router();

// route level middleware
orderRoutes.use('/createOrder',checkUserAuth)
orderRoutes.use('/updateOrder',checkUserAuth)
orderRoutes.use('/deleteOrder',checkUserAuth)
orderRoutes.use('/getAllOrder',checkUserAuth)
orderRoutes.use('/filterByValue',checkUserAuth)
orderRoutes.use('/filterByInterval',checkUserAuth)


// protected routes
orderRoutes.post('/createOrder',orderController.createOrder)
orderRoutes.put('/updateOrder',orderController.updateOrder)
orderRoutes.delete('/deleteOrder',orderController.deleteOrder)
orderRoutes.get('/getAllOrder',orderController.getAllOrder)
orderRoutes.get('/filterByValue',orderController.filterByValue)
orderRoutes.get('/filterByInterval',orderController.filterByInterval)

// export
export default orderRoutes
