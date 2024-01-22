import express from "express";

// Liste des produits
import { products } from "../mock-product.mjs";

// Methodes qui interagissent avec les produits
import {
  deleteProduct,
  getProduct,
  getUniqueId,
  updateProduct,
} from "../mock-product.mjs";

// Message de succes
import { success } from "./helper.mjs";

const productsRouter = express();

// Recherche de tous les produits presents dans ../mock-product.mjs
productsRouter.get("/", (req, res) => {
  // Message de reussite
  const message = "La liste des produits a bien été recupérée";
  res.json(success(message, products));
});

// Recherche de qu'un seul produit selon son id
productsRouter.get("/:id", (req, res) => {
  // Recuperation de l'id place en parametre
  const productId = req.params.id;

  // On recherche un produit qui correspond a l'id place en parametre
  const product = products.find((product) => product.id == productId);

  // Message de reussite
  const message = `Le produit dont l'id vaut ${productId} a bien été récupéré.`;
  res.json(success(message, product));
});

// Creation d'un nouveau produit
productsRouter.post("/", (req, res) => {
  // Generation d'un nouvel id
  const id = getUniqueId(products);

  const createdProduct = {
    ...{ id: id },
    ...req.body,
    ...{ created: new Date() },
  };

  // Ajout du produit dans la liste (non-physique)
  products.push(createdProduct);

  // Message de reussite
  const message = `Le produit ${createdProduct.name} a bien été créé ! `;

  res.json(success(message, createdProduct));
});

// Mise a jour d'un produit existant
productsRouter.put("/:id", (req, res) => {
  // Recuperation de l'id place en parametre
  const productId = req.params.id;

  // On recherche un produit qui correspond a l'id place en parametre
  const searchedProduct = getProduct(productId);

  // Nouvelles donnees
  const updatedProduct = {
    id: productId,
    ...req.body,
    created: searchedProduct.created,
  };

  // Execution de la mise a jour
  updateProduct(productId, updatedProduct);

  // Message de reussite
  const message = `Le produit dont l'id vaut ${productId} a bien été mis à jour.`;
  res.json(success(message, getProduct(productId)));
});

// Suppression du produit
productsRouter.delete("/:id", (req, res) => {
  const productId = req.params.id;

  // Si l'id correspond alors on supprime le produit
  deleteProduct(productId);

  // Message de reussite
  const message = `Le produit dont l'id vaut ${productId} a bien été supprimé.`;
  res.json(success(message, getProduct(productId)));
});

export { productsRouter };
