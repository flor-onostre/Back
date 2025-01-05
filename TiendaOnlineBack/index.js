import express from "express";
import cors from "cors";
import env from "dotenv";
import mongoose from "mongoose";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "./swagger.json" assert { type: "json" };

env.config();
const PORT = process.env.PORT || 3000;
const app = express();
//midleware de json
app.use(express.json());
//middleware de cors
app.use(cors(
  {
    origin: "*",
    allowedHeaders: ["Content-Type", "Authorization","x-refresh-token"],
  }
));
//middleware de log
app.use((req, res, next) => {
  logger.error(`${req.method} ${req.url}`);
  next();
});
//rutas
app.use("/productos", routerProducto);
app.use("/blogs", routerBlog);
app.use("/autores", routerAutor);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use("/auth", routerUsuario)

//conexion a la base de datos
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});