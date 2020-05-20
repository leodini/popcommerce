exports.up = function (knex) {
  return knex.schema.createTable("product", function (table) {
    table.string("id").primary();
    table.string("name").notNullable();
    table.string("decription").notNullable();
    table.integer("price").notNullable();
    table.string("url_img").notNullable();
    table.string("category");
    table.integer("discount");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("product");
};
