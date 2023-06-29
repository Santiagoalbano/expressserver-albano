class ProductManager {
    constructor() {
      this.products = [];
    }
  
    getProducts(limit) {
      let products = this.products;
  
      if (limit && limit > 0) {
        products = products.slice(0, limit);
      }
  
      return products;
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id);
  
      if (!product) {
        throw new Error('Product not found');
      }
  
      return product;
    }
  
    addProduct(title, description, price, photo, code, stock) {
      const id = this.generateUniqueId();
      const product = { id, title, description, price, photo, code, stock };
  
      const existingProduct = this.products.find((p) => p.code === code);
      if (existingProduct) {
        throw new Error('Product code already exists');
      }
  
      this.products.push(product);
    }
  
    generateUniqueId() {
      return Date.now().toString(22) + Math.random().toString(22).substr(2, 2);
    }
  }
  
  // Agregar productos de muestra
  const productManager = new ProductManager();
  
  productManager.addProduct('Producto 1', 'Descripción del Producto 1', 10.99, 'imagen1.jpg', '001', 10);
  productManager.addProduct('Producto 2', 'Descripción del Producto 2', 19.99, 'imagen2.jpg', '002', 5);
  productManager.addProduct('Producto 3', 'Descripción del Producto 3', 8.5, 'imagen3.jpg', '003', 20);
  
  

  
  
  module.exports = ProductManager;
