import express from "express";
import { getProducts } from "../controllers/directoryC";

const directoryRouter = express.Router();

directoryRouter.get("/", getProducts);

export default directoryRouter;
