import express from "express";
import { sequelize } from "./db/sequelize.mjs";

// Initialisation d'express
const app = express();
app.use(express.json());

// Initialisation du port dans une constante
const port = 3000;

sequelize.authenticate().then((_) => console.log("réussi"));

// Redirection si uniquement /api/ est present dans l'uri
app.get("/api/", (req, res) => {
  res.redirect(`http://localhost:${port}/`);
});

// Importations de la route ./routes/products.mjs
import { productsRouter } from "./routes/product.mjs";

// Appel des produits
app.use("/api/products", productsRouter);

// Message console
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
