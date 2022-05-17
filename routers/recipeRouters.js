import { Router } from "express";
import { getAllRecipes } from "../controllers/recipesController.js";

const recipeRouters = Router();
recipeRouters.route("/").get(getAllRecipes)
export default recipeRouters;