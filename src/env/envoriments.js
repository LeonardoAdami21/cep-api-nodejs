import dotenv from "dotenv";
dotenv.config();

const appPort = process.env.APP_PORT || 3000;
const viaCepUrl = process.env.VIACEP_URL || "https://viacep.com.br/ws/";

export const envoriments = {
  appPort,
  viaCepUrl,
};
