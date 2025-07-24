import mongoose from "mongoose";
import dotenv from "dotenv";
import products from "./data/products.js";
import { product } from "./models/Product.js";

dotenv.config(); // Load environment variables from .env file

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await product.deleteMany({});
    await product.insertMany(products);
    console.log("Database seeded!");
    process.exit();
  })
  .catch((err) => {
    console.error("DB Connection Failed", err);
    process.exit(1);
  });
