import pool from "../database/pg.js";

export const getAllRecipes = (req,res) => {
    pool.query(`SELECT * FROM "Recipe"`)
    .then((data) => res.status(200).json({recipes:data.rows}))
    .catch((err) => res.status(500).json(err));
}