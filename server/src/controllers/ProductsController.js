const connection = require("../database/connection");
const generateUniqueId = require("../utils/generateUniqueId");

module.exports = {
  async create(request, response) {
    const {
      name,
      description,
      price,
      url_img,
      total_available,
      category,
      discount,
    } = request.body;

    const productId = generateUniqueId();

    const newProduct = {
      productId,
      name,
      description,
      price,
      url_img,
      total_available,
      category,
      discount,
    };

    console.log(newProduct);

    await connection("product").insert(newProduct);

    return response.json(newProduct);
  },
  async index(request, response) {
    const products = await connection("product").select("*");
    return response.json(products);
  },
};
