// Liste de produits dans un tableau d'objets
let products = [
  {
    id: 1,
    name: "Big Mac",
    price: 5.99,
    created: new Date(),
  },
  {
    id: 2,
    name: "Mc Chicken",
    price: 4.99,
    created: new Date(),
  },
  {
    id: 3,
    name: "Double Cheese Burger",
    price: 2.99,
    created: new Date(),
  },
  {
    id: 4,
    name: "Fries",
    price: 2.99,
    created: new Date(),
  },
  {
    id: 5,
    name: "Mc Nuggets",
    price: 3.49,
    created: new Date(),
  },
  {
    id: 6,
    name: "Salad",
    price: 2.79,
    created: new Date(),
  },
  {
    id: 7,
    name: "Coke",
    price: 1.99,
    created: new Date(),
  },
  {
    id: 8,
    name: "Ice Tea",
    price: 1.99,
    created: new Date(),
  },
  {
    id: 9,
    name: "Water",
    price: 1.49,
    created: new Date(),
  },
];

// Recherche du produit via l'id
const getProduct = (searchProduct) => {
  const product = products.find((product) => product.id == searchProduct);

  return product;
};

// Generation d'un  nouvel id plus grand que le dernier
const getUniqueId = (products) => {
  const productsIds = products.map((product) => product.id);
  const maxId = productsIds.reduce((a, b) => Math.max(a, b));
  const uniqueId = maxId + 1;

  return uniqueId;
};

// Mise a jour du produit
const updateProduct = (productId, updatedProduct) => {
  products = products.map((product) =>
    product.id == productId ? updatedProduct : product
  );
};

// Suppression d'un produit
const deleteProduct = (productId) => {
  products = products.filter((product) => product.id != productId);
};

export { products, getProduct, updateProduct, getUniqueId, deleteProduct };
