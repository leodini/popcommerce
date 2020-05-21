const express = require("express");
const ProductsController = require("./controllers/ProductsController");
const routes = express.Router();

routes.get("/product", ProductsController.index);
routes.post("/product", ProductsController.create);

module.exports = routes;
