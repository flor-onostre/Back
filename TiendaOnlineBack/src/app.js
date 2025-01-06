import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router as authRoutes } from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/auth', authRoutes);
app.use('/productos', productRoutes);

// Exporta la instancia de `app`
export default app;
