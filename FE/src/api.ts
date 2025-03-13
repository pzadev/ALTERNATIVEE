import axios from "axios";

const API_URL = "http://localhost:1901/api";

const DIRECTORY_API_URL = `${API_URL}/directory`;
const ITEM_API_URL = `${API_URL}/items`;

interface Product {
  name: string;
  image: string;
  country: string;
  parent: string;
  category: string[];
  alternative: string[];
}

interface Item {
  Name: string;
  Image: string;
  Country: string;
  Category: string[];
  AlternativeTo: string[];
  Parent: string;
  HQ: string;
  OpenSource: boolean;
  Summary: string;
  Website: string;
  Votes: number;
}

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>(DIRECTORY_API_URL);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getItems = async (): Promise<Item[]> => {
  try {
    const response = await axios.get<Item[]>(ITEM_API_URL);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
