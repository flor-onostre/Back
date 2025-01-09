import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { brotliMiddleware } from "./middlewares/brotliMiddleware.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import { logger } from "./config/Winston.js";
import EjemploRoutes from './routes/EjemploRoutes.js';
import routerBlog from './routes/BlogRoutes.js';
import routerAutor from './routes/AutorRoutes.js';
import routerUsuario from './routes/UserRoutes.js';

dotenv.config();


const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors(
    {
    origin: "*",
    allowedHeaders: ["Content-Type", "Authorization","x-refresh-token", "x-no-compression", "x-access-token", "x-token", "x-token-expiration", "x-token-uuid", "x-token-uuid-expiration", 'GET', 'POST', 'PUT', 'DELETE'],
  }
));


app.use((req, res, next) => {
    logger.error(`${req.method} ${req.url}`);
    next();
  });

app.get('/test', (req, res) => res.send('Prueba exitosa'));
app.use('/ejemplo', EjemploRoutes);
app.use("/blogs", routerBlog);
app.use("/autores", routerAutor);
app.use("/auth", routerUsuario);
app.get("/", (req, res) => res.send("Hello World!"));

app.get("/protected",authMiddleware, (req, res) => {
    res.json({ message: "Acceso permitido", user: req.user });
  });

  app.use((req, res) => {
    res.status(404).send("<h1>404<h1>");
  });

mongoose
.connect(process.env.MONGO_NAME)
.then(() => {
console.log("Connected to MongoDB");
})
.catch((error) => {
console.error("Error connecting to MongoDB:", error);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});