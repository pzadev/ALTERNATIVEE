import mongoose, { Schema, Document } from "mongoose";

interface Item extends Document {
  name: string;
  image: string;
  country: string;
  category: string[];
  AlternativeTo: string[];
  Parent: string;
  HQ: string;
  OpenSource: boolean;
  Summary: string;
  Website: string;
  Votes: number;
}

const ItemSchema: Schema = new Schema({
  Name: { type: String, required: true },
  Image: { type: String, required: true },
  Country: { type: String, required: true },
  Category: { type: [String], required: true },
  AlternativeTo: { type: [String], required: true },
  Parent: { type: String, required: false },
  HQ: { type: String, required: true },
  OpenSource: { type: Boolean, required: false },
  Summary: { type: String, required: true },
  Website: { type: String, required: false },
  Votes: { type: Number, required: false, default: 0 },
});

const ItemModel = mongoose.model<Item>("Items", ItemSchema);

export default ItemModel;
