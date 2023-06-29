const express = require('express');
const app = express();

const ProductManager = require('./ProductManager');


const productManager = new ProductManager();


productManager.addProduct('Product 1', 'Description 1', 19.99, 'photo1.jpg', 'P123', 10);
productManager.addProduct('Product 2', 'Description 2', 29.99, 'photo2.jpg', 'P456', 5);
productManager.addProduct('Product 3', 'Description 3', 39.99, 'photo3.jpg', 'P789', 8);
productManager.addProduct('Producto 4', 'Descripción del Producto 4', 10.99, 'imagen1.jpg', '001', 10);
productManager.addProduct('Producto 5', 'Descripción del Producto 5', 19.99, 'imagen2.jpg', '002', 5);
productManager.addProduct('Producto 6', 'Descripción del Producto 6', 8.5, 'imagen3.jpg', '003', 20);
productManager.addProduct('Product 7', 'Description 3', 49.99, 'photo3.jpg', 'P789', 8);
productManager.addProduct('Producto 8', 'Descripción del Producto 4', 1.99, 'imagen1.jpg', '501', 10);
productManager.addProduct('Producto 9', 'Descripción del Producto 5', 12.99, 'imagen2.jpg', '702', 5);
productManager.addProduct('Producto 10', 'Descripción del Producto 6', 3.5, 'imagen3.jpg', '103', 20);




app.get('/products', (req, res) => {
  const products = productManager.getProducts();
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const productId = req.params.id;

  try {
    const product = productManager.getProductById(productId);
    res.json(product);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
