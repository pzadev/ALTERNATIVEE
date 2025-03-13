import mongoose, { Schema, Document } from "mongoose";

interface Product extends Document {
  name: string;
  image: string;
  country: string;
  parent: string;
  category: string[];
  alternative: string[];
}

const directorySchema: Schema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  country: { type: String, required: true },
  parent: { type: String, required: false },
  category: { type: [String], required: true },
  alternative: { type: [String], required: true },
});

const ProductModel = mongoose.model<Product>("Product", directorySchema);

export default ProductModel;
