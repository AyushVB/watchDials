import express from "express"
import orderController from "../controllers/orderControllers.js";
import checkUserAuth from "../middlewares/auth-middleware.js";

const orderRoutes=express.Router();

// route level middleware
orderRoutes.use('/createOrder',checkUserAuth)
orderRoutes.use('/updateOrder',checkUserAuth)
orderRoutes.use('/deleteOrder',checkUserAuth)
orderRoutes.use('/getAllOrders',checkUserAuth)
orderRoutes.use('/dynamicFilters',checkUserAuth)



// protected routes
orderRoutes.post('/createOrder',orderController.createOrder)
orderRoutes.patch('/updateOrder',orderController.updateOrder)
orderRoutes.delete('/deleteOrder',orderController.deleteOrder)
orderRoutes.get('/getAllOrders',orderController.getAllOrder)
orderRoutes.get('/dynamicFilters',orderController.dynamicFilters)

// export
export default orderRoutes
