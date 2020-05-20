exports.up = function (knex) {
  return knex.schema.createTable("user", function (table) {
    table.string("id").primary();
    table.string("user").notNullable();
    table.string("password").notNullable();
    table.string("avatar");
    table.string("wishlist");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("user");
};
