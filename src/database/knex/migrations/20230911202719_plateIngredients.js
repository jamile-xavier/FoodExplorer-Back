exports.up = (knex) =>
  knex.schema.createTable("plateIngredients", (table) => {
    table.increments("id");
    table.text("name").notNullable();

    table.integer("plates_id").references("id").inTable("plates");
    table.integer("ingredients_id").references("id").inTable("ingredients");
  });

exports.down = (knex) => knex.schema.dropTable("plateIngredients");
