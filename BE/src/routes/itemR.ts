import express from "express";
import { changeVote, getItems } from "../controllers/directoryC";
import { postItems } from "../controllers/directoryC";

const itemRouter = express.Router();

itemRouter.get("/", getItems);

itemRouter.post("/", postItems);

itemRouter.patch("/", changeVote);

export default itemRouter;
