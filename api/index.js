import express from 'express';
import dotenv from 'dotenv';
import userRoutes from "./routes/user.route.js";



dotenv.config();



const app = express();

app.listen(3000,()=>{
    console.log("Server is running on port 3000 !")
})

app.use('/api/user', userRoutes);