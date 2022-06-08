const express = require('express')
const cors = require('cors');
const connectDB = require('./db.js');
require('dotenv').config();
const app = express();
const authRoutes = require('./Routes/auth')
const productRoutes = require('./Routes/products')
app.use(cors());
app.use(express.json());
const port = process.env.PORT|| 5000;
connectDB();

app.use('/api',authRoutes)
app.use('/api',productRoutes)
app.get("/",(req,res)=>{
    return res.send("Hello world");
})

app.listen(port,()=>{
    console.log(`Listening at port http://localhost:${port}`);
})
