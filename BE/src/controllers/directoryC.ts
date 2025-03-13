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
