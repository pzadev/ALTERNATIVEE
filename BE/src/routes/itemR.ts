import express from "express";
import { getItems } from "../controllers/directoryC";
import { postItems } from "../controllers/directoryC";

const itemRouter = express.Router();

itemRouter.get("/", getItems);

itemRouter.post("/", postItems);

export default itemRouter;
