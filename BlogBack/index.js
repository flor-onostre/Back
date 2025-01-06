import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './config/mongodb.js';
import EjemploRoutes from './routes/EjemploRoutes.js';

dotenv.config();
connectDB();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => res.send('Prueba exitosa'));
app.use('/ejemplo', EjemploRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});