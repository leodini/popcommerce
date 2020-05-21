exports.up = function (knex) {
  knex.schema.createTable("product", function (table) {
    table.string("ProductId").primary();
    table.string("name").notNullable();
    table.string("description").notNullable();
    table.integer("price").notNullable();
    table.string("url_img").notNullable();
    table.integer("total_available");
    table.string("category");
    table.integer("discount");
    table.foreign("comments").references("userId").inTable("user");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("product");
};
