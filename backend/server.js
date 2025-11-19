console.log("Mock server is running...");

function getProducts() {
  return require('./api/products.json');
}

module.exports = { getProducts };
