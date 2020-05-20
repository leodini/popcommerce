exports.up = function (knex) {
  return knex.schema.createTable("product", function (table) {
    table.increments();
    table.string("id").primary();
    table.string("name").notNullable();
    table.string("decription").notNullable();
    table.number("price").notNullable();
    table.string("url_img").notNullable();
    table.string("category");
    table.number("discount");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("product");
};
