import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    image: String,
});

export const product = mongoose.model("Product", productSchema);