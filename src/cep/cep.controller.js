import { cepService } from "./cep.service.js";

const getAllCep = async (req, res) => {
  const cep = req.params.cep.split(",");
  if (cep.length > 10) {
    return res.status(400).send({ error: "You can only search for 10 CEPs" });
  }
  if (cep.some((cep) => cep.length !== 8)) {
    return res.status(400).send({ error: "Invalid CEP" });
  }
  try {
    const search = await Promise.all(cep.map((cep) => cepService.getCep(cep)));
    return res.status(200).send(search);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};

export const cepController = {
  getAllCep,
};
