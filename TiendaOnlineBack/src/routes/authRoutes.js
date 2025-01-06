import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

// Registro de usuario
router.post('/register', registerUser);

// Login de usuario
router.post('/login', loginUser);

// Exporta el router como exportación predeterminada
export const authRoutes = router;
