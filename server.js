import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js'
// Import Routes

import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import authRoutes from './routes/authRoutes.js'

dotenv.config(); // Load .env variables
connectDB(); // Connect to MongoDB

const app = express();
app.use(cors());
app.use(express.json());


// use Routes 
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
