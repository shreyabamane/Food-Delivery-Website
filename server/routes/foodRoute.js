import express from "express";
import { addFood } from "../controllers/foodController.js";

// Create a new router instance for handling food-related routes
const foodRouter = express.Router();

foodRouter.post("/add", addFood)


export default foodRouter;