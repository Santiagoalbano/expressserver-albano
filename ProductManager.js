const fs = require('fs');
const productsData = fs.readFileSync('products.json', 'utf-8');
const products = JSON.parse(productsData);

class ProductManager {
  constructor() {
    this.products = [];
    this.loadProductsFromFile();


    getProducts() {
      return products;
    }
    
  }

  generateUniqueId() {
    // Lógica para generar un ID único (puede ser una implementación más robusta en producción)
    return Date.now().toString(22) + Math.random().toString(22).substr(1);
  }

  loadProductsFromFile() {
    try {
      const data = fs.readFileSync('products.json', 'utf8');
      this.products = JSON.parse(data);
    } catch (error) {
      console.log('Error loading products from file:', error);
      this.products = [];
    }
  }

  saveProductsToFile() {
    try {
      fs.writeFileSync('products.json', JSON.stringify(this.products, null, 2), 'utf8');
      console.log('Products saved to file.');
    } catch (error) {
      console.log('Error saving products to file:', error);
    }
  }

  getProducts(limit) {
    let products = this.products;
    if (limit) {
      products = products.slice(0, limit);
    }
    return products;
  }

  addProduct(title, description, price, photo, code, stock) {
    const id = this.generateUniqueId();
    const product = {
      id,
      title,
      description,
      price,
      photo,
      code,
      stock
    };
    this.products.push(product);
    this.saveProductsToFile();
    return product;
  }

  getProductById(id) {
    const product = this.products.find(product => product.id === id);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  }
}

module.exports = ProductManager;






