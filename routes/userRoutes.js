import express from "express"
import userController from "../controllers/userControllers.js";
import checkUserAuth from "../middlewares/auth-middleware.js";

const userRoutes=express.Router();

// route level middleware
userRoutes.use('/changepassword',checkUserAuth)
userRoutes.use('/loggeduser',checkUserAuth)

// Public routes
userRoutes.post('/register',userController.userRegistration)
userRoutes.post('/login',userController.userLogin)
userRoutes.post('/sent-reset-password-email',userController.sendUserPasswordResetEmail)
userRoutes.put('/reset-password/:id/:token',userController.userpasswordReset)

// protected routes
userRoutes.put('/changepassword',userController.changeUserPassword)
userRoutes.get('/loggeduser',userController.loggedUser)


// export
export default userRoutes