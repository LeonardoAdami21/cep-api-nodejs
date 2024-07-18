import express from "express";
const app = express();
import cors from "cors";
import { envoriments } from "./env/envoriments.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json" assert { type: "json" };
import cepRouter from "./cep/cep.router.js";

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/search/local/", cepRouter);

app.listen(envoriments.appPort, () => {
  console.log(
    `Server running on port http://localhost:${envoriments.appPort}/api-docs`,
  );
});
