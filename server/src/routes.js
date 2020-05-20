const express = require("express");
const routes = express.Router();

routes.post("/user", (req, res) => {
  const { user, password } = req.body;
  console.log(user, password);
});

module.exports = routes;
