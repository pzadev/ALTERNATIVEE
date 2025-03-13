import express from "express";
import { getItems } from "../controllers/directoryC";

const itemRouter = express.Router();

itemRouter.get("/", getItems);

export default itemRouter;
