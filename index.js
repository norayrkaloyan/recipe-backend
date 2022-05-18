import "dotenv/config";
import express from "express";
import recipeRouters from "./routers/recipeRouters.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/recipes", recipeRouters);

app.get("/", (req, res) => {
    res.send("<p>Ahoy!</p>")
});



app.listen(port, () => 
    console.log(`Server listening on port ${port}`)
);
