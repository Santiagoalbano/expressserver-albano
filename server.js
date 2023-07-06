const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const Product = require('./productModel');


const app = express();
const port = 3000;

// Middleware para procesar el cuerpo de las solicitudes como JSON
app.use(express.json());

// Conexión a la base de datos de MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Conexión exitosa a MongoDB');

    // Rutas relacionadas con los productos
    app.use('/', productRoutes);

    // Iniciar el servidor
    app.listen(port, () => {
      console.log(`Servidor activo en el puerto ${port}`);
    });
  })
  .catch(error => {
    console.error('Error al conectar a MongoDB:', error);
  });


  const products = [
    
      {
        "id": "1",
        "title": "Producto 1",
        "description": "Descripción 1",
        "price": 10.99,
        "photo": "imagen1.jpg",
        "code": "001",
        "stock": 10
      },
      {
        "id": "2",
        "title": "Producto 2",
        "description": "Descripción 2",
        "price": 19.99,
        "photo": "imagen2.jpg",
        "code": "002",
        "stock": 5
      },
      {
        "id": "3",
        "title": "Producto 3",
        "description": "Descripción  3",
        "price": 8.5,
        "photo": "imagen3.jpg",
        "code": "003",
        "stock": 20
      },
      {
        "id": "4",
        "title": "Producto 4",
        "description": "Descripción 4",
        "price": 15.75,
        "photo": "imagen4.jpg",
        "code": "004",
        "stock": 15
      },
      {
        "id": "5",
        "title": "Producto 5",
        "description": "Descripción 5",
        "price": 12.99,
        "photo": "imagen5.jpg",
        "code": "005",
        "stock": 8
      },
      {
        "id": "6",
        "title": "Producto 6",
        "description": "Descripción 6",
        "price": 9.99,
        "photo": "imagen6.jpg",
        "code": "006",
        "stock": 12
      },
      {
        "id": "7",
        "title": "Producto 7",
        "description": "Descripción 7",
        "price": 18.5,
        "photo": "imagen7.jpg",
        "code": "007",
        "stock": 25
      },
      {
        "id": "8",
        "title": "Producto 8",
        "description": "Descripción  8",
        "price": 11.5,
        "photo": "imagen8.jpg",
        "code": "008",
        "stock": 3
      },
      {
        "id": "9",
        "title": "Producto 9",
        "description": "Descripción  9",
        "price": 14.99,
        "photo": "imagen9.jpg",
        "code": "009",
        "stock": 18
      },
      {
        "id": "10",
        "title": "Producto 10",
        "description": "Descripción  10",
        "price": 16.99,
        "photo": "imagen10.jpg",
        "code": "010",
        "stock": 7
      }
     
     
  ];
  
  // Insertar los productos en la base de datos
  Product.insertMany(products)
    .then(() => {
      console.log('Productos insertados correctamente en la base de datos.');
    })
    .catch((error) => {
      console.error('Error al insertar los productos:', error);
    });
  