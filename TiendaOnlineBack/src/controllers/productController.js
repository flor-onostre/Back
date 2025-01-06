const Product = require('../models/Product');

// Obtener todos los productos con paginación
const getAllProducts = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const products = await Product.find()
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos', error });
  }
};

// Obtener un producto por ID
const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener producto', error });
  }
};

// Crear un producto
const createProduct = async (req, res) => {
  const { name, description, price, category } = req.body;
  try {
    const product = new Product({ name, description, price, category });
    await product.save();
    res.status(201).json({ message: 'Producto creado', product });
  } catch (error) {
    res.status(400).json({ message: 'Error al crear producto', error });
  }
};

// Actualizar un producto
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, category } = req.body;
  try {
    const product = await Product.findByIdAndUpdate(
      id,
      { name, description, price, category },
      { new: true }
    );
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
    res.status(200).json({ message: 'Producto actualizado', product });
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar producto', error });
  }
};

// Eliminar un producto
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
    res.status(200).json({ message: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar producto', error });
    }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};