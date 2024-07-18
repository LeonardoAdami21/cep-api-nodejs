import { cepService } from "./cep.service.js";

const getAllCep = async (req, res) => {
  const cep = req.params.cep.split(",");
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
