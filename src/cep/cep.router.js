import express from "express";
import { cepController } from "./cep.controller.js";
const cepRouter = express.Router();

cepRouter.get("/:cep", cepController.getAllCep);

export default cepRouter;
