import express from "express";
import ejemploController from "../controllers/EjemploControllers.js";

const router = express.Router();

router.get("/", ejemploController.getEjemplo);
router.post("/", ejemploController.createEjemplo);

export default router;