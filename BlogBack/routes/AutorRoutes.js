import express from "express";
import { postAutorController,putAutorController,getAutorController,deleteAutorController,getsAutoresController } from "../controllers/AutorControllers.js";
const routerAutor = express.Router();

routerAutor.get("/", getsAutoresController)
routerAutor.get("/:id", getAutorController)
routerAutor.post("/", postAutorController)
routerAutor.put("/:id", putAutorController)
routerAutor.delete("/:id", deleteAutorController)

export default routerAutor;