import mongoose from "mongoose";

// Define the product schema
const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
    maxlength: [200, "Please write the description in the given range"],
  },
  price: {
    type: Number,
    required: true,
  },
  inStocks: {
    type: Number,
    default: 1,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

// Define or retrieve the ProductModel
const ProductModel = mongoose.models.products || mongoose.model("products", productSchema);

// Export the ProductModel
export { ProductModel };
