const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");
const { diskStorage } = require("multer");

class DishesController {
  async create(request, response) {
    const { title, description, category, price, ingredients } = request.body;

    const checkDishExist = await knex("dishes").where({ title }).first();

    if (checkDishExist) {
      throw new AppError("Este prato já existe no cardápio.");
    }

    const imageFilename = request.file.filename;
    const diskStorage = new DiskStorage();
    const filename = await diskStorage.saveFile(imageFilename);

    const dish_id = await knex("dishes").insert({
      image: filename,
      title,
      description,
      category,
      price,
    });

    let ingredientsInsert = null;
    if (Array.isArray(ingredients)) {
      ingredientsInsert = ingredients.map((ingredient) => {
        return {
          name: ingredient,
          dish_id: dish_id[0],
        };
      });
    } else {
      ingredientsInsert = {
        dish_id: dish_id[0],
        name: ingredients,
      };
    }
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
        .groupBy("dishes.id")
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

  async update(request, response) {
    const { title, description, category, image, price, ingredients } =
      request.body;
    const { id } = request.params;

    const dish = await knex("dishes").where({ id }).first();

    if (!dish) {
      throw new AppError("O prato ao qual você deseja atualizar não existe.");
    }

    let filename = dish.image;
    if (request?.file && request.file?.filename) {
      const diskStorage = new DiskStorage();
      const imageFilename = request.file.filename;
      filename = await diskStorage.saveFile(imageFilename);
    }

    dish.title = title ?? dish.title;
    dish.description = description ?? dish.description;
    dish.category = category ?? dish.category;
    dish.image = filename;
    dish.price = price ?? dish.price;

    await knex("dishes").where({ id }).update(dish);
    await knex("dishes").where({ id }).update("updated_at", knex.fn.now());
    const hasOnlyOneIngredient = typeof ingredients === "string";
    let ingredientInsert;
    if (hasOnlyOneIngredient) {
      ingredientInsert = {
        dish_id: dish.id,
        name: ingredients,
      };
    } else if (ingredients.length > 1) {
      ingredientInsert = ingredients.map((ingredient) => {
        return {
          dish_id: dish.id,
          name: ingredient,
        };
      });

      await knex("ingredients").where({ dish_id: id }).delete();
      await knex("ingredients").where({ dish_id: id }).insert(ingredientInsert);
    }
    return response.status(202).json("Prato atualizado com sucesso!");
  }
}
module.exports = DishesController;
