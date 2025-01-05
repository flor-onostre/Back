const express = require('express');
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const { isAuthenticated, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

// Obtener todos los productos
router.get('/', getAllProducts);

// Obtener un producto por ID
router.get('/:id', getProductById);

// Crear un producto (solo admin)
router.post('/', isAuthenticated, isAdmin, createProduct);

// Actualizar un producto (solo admin)
router.put('/:id', isAuthenticated, isAdmin, updateProduct);

// Eliminar un producto (solo admin)
router.delete('/:id', isAuthenticated, isAdmin, deleteProduct);

module.exports = router;
