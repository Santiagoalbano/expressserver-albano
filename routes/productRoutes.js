const express = require('express');
const router = express.Router();
const Product = require('../productModel');


// Ruta para cargar productos de ejemplo
router.post('/load-sample-products', async (req, res) => {
  try {
    const sampleProducts = [
      // Aquí irían los productos de ejemplo
      // Ejemplo:
      { title: 'Producto 1', description: 'Descripción del producto 1', price: 10.99 },
      { title: 'Producto 2', description: 'Descripción del producto 2', price: 19.99 },
      // ... otros productos
    ];

    // Cargar los productos en la base de datos
    await Product.insertMany(sampleProducts);

    res.status(200).json({ message: 'Productos de ejemplo cargados correctamente.' });
  } catch (error) {
    console.error('Error al cargar productos de ejemplo:', error);
    res.status(500).json({ error: 'Error al cargar productos de ejemplo.' });
  }
});

module.exports = router;


// Ruta GET para obtener todos los productos
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
});

// Ruta POST para crear un nuevo producto
router.post('/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el producto' });
  }
});

module.exports = router;
