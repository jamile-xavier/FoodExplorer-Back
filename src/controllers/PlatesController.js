const knex = require("../database/knex");

class PlatesController {
  async create(request, response) {
    const { image, name, category, ingredients, price, description } =
      request.body;
    const { user_id } = request.params;

    const [plate_id] = await knex("plates").insert({
      image,
      name,
      price,
      description,
      user_id,
    });

    const categoryInsert = category.map((name) => {
      return {
        plate_id,
        name,
      };
    });
    await knex("categories").insert(categoryInsert);

    const ingredientsInsert = ingredients.map((name) => {
      return {
        plate_id,
        name,
      };
    });
    await knex("ingredients").insert(ingredientsInsert);

    response.json();
  }

  async show(request, response) {
    const { id } = request.params;

    const plate = await knex("plates").where({ id }).first();
    const category = await knex("categories")
      .where({ note_id: id })
      .orderBy("name");
    const ingredients = await knex("ingredients")
      .where({ note_id: id })
      .orderBy("name");

    return response.json({
      ...plate,
      category,
      ingredients,
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("plates").where({ id }).delete();

    return response.json();
  }

  async index(request, response) {
    const { user_id } = request.query;

    const plates = await knex("plates").where({ user_id }).orderBy("name");

    return response.json(plates);
  }
}

module.exports = PlatesController;
