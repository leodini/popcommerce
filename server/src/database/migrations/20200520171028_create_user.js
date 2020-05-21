exports.up = function (knex) {
  return knex.schema.createTable("user", function (table) {
    table.string("userId").primary();
    table.string("user").notNullable();
    table.string("password").notNullable();
    table.foreign("wishes").references("productId").inTable("product");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("user");
};
