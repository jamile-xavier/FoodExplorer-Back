exports.up = (knex) =>
  knex.schema.createTable("plates", (table) => {
    table.increments("id");
    table.text("image");
    table.text("name");
    table.decimal("price");
    table.text("description");
    table.integer("category_id").references("id").inTable("categories");
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("plates");
