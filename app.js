import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/connectDB.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

dotenv.config()
const app=express()

const PORT=process.env.PORT || 3000
const DATABASE_URL=process.env.DATABASE_URL

// CORS policy
app.use(cors())

// JSON
app.use(express.json())

// connect database
connectDB(DATABASE_URL)

// LOAD user routes
// app.use('/api/user',userRoutes)

// LOAD order routes
// app.use('/api/order',orderRoutes)

app.listen(PORT,()=>{
    console.log(`listen on PORT: ${PORT}`)
})