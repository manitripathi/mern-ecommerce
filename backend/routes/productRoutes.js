import { Router } from "express";
import { product } from "../models/Product.js";

const router = Router();

router.get("/", async (req, res) => {
  const products = await product.find();
  res.json(products);
});

router.get("/:id", async (req, res) => {
  const productDetail = await product.findById(req.params.id);
  if (productDetail) {
    res.json(productDetail);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

export default router;
