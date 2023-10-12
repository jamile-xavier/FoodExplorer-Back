const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class DishesController {
  async create(request, response) {
    const { title, description, category, price, ingredients } = request.body;

    const checkDishExist = await knex("dishes").where({ title }).first();

    if (checkDishExist) {
      throw new AppError("Este prato já existe no cardápio.");
    }

    /*  const dishFileName = request.file.filename;
    const filename = await diskStorage.saveFile(dishFileName);*/

    const [dish_id] = await knex("dishes").insert({
      /* image: filename,*/
      title,
      description,
      category,
      price,
      user_id,
    });

    const ingredientsInsert = ingredients.map((ingredient) => {
      return {
        name: ingredient,
        dish_id,
      };
    });
    await knex("ingredients").insert(ingredientsInsert);

    return response.status(201).json();
  }

  async show(request, response) {
    const { id } = request.params;

    const dish = await knex("dishes").where({ id }).first();
    const ingredients = await knex("ingredients")
      .where({ dish_id: id })
      .orderBy("name");

    return response.json({
      ...dish,
      ingredients,
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("dishes").where({ id }).delete();

    return response.json();
  }

  async index(request, response) {
    const { title, ingredients } = request.query;

    let dishes;

    if (ingredients) {
      const filteredIngredients = ingredients
        .split(",")
        .map((ingredient) => ingredient.trim());

      plates = await knex("ingredients")
        .select([
          "dishes.id",
          "dishes.title",
          "dishes.description",
          "dishes.category",
          "dishes.price",
          "dishes.image",
        ])
        .whereLike("dishes.title", `%${title}%`)
        .WhereIn("name", filteredIngredients)
        .innerJoin("dishes", "dishes.id", "ingredients.dishes_id")
        .orderBy("dishes.title");
    } else {
      dishes = await knex("dishes")
        .whereLike("title", `%${title}%`)
        .orderBy("title");
    }

    const dishesIngredients = await knex("ingredients");
    const dishesWithIngredients = dishes.map((dish) => {
      const dishIngredient = dishesIngredients.filter(
        (ingredient) => ingredient.dish_id === dish.id
      );

      return {
        ...dish,
        ingredients: dishIngredient,
      };
    });

    return response.json(dishesWithIngredients);
  }
}

module.exports = DishesController;
