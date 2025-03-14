import { Request, Response } from "express";
import ProductModel from "../models/directoryM";
import ItemModel from "../models/ItemsM";

export const getProducts = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
  }
};

export const getItems = async (req: Request, res: Response): Promise<any> => {
  try {
    const items = await ItemModel.find();
    res.status(200).json(items);
  } catch (err) {
    console.log(err);
  }
};

export const postItems = async (req: Request, res: Response): Promise<any> => {
  try {
    const {
      Name,
      AlternativeTo,
      Category,
      Website,
      Country,
      HQ,
      Image,
      Summary,
      Votes,
      OpenSource,
      Parent,
    } = req.body;

    const newProduct = new ItemModel({
      Name,
      AlternativeTo,
      Category,
      Website,
      Country,
      HQ,
      Image,
      Summary,
      Votes,
      OpenSource,
      Parent,
    });

    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err });
  }
};

export const changeVote = async (req: Request, res: Response): Promise<any> => {
  try {
    const { Vote, ProductName } = req.body;
    const item = await ItemModel.findOne({ Name: ProductName });

    if (!ProductName) {
      return res.status(400).json({ error: "ProductName is required" });
    }

    if (typeof Vote !== "number" || isNaN(Vote)) {
      return res.status(400).json({ error: "Vote must be a valid number" });
    }

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    item.Votes = (item.Votes || 0) + Vote;
    await item.save();

    res.status(200).json({ message: "Vote updated successfully", item });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};
