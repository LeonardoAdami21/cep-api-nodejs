import axios, { AxiosError } from "axios";
import { envoriments } from "../env/envoriments.js";

const getCep = async (cep) => {
  try {
    const response = await axios.get(`${envoriments.viaCepUrl}/${cep}/json/`);
    if (response.data.erro) {
      throw new Error({ message: "CEP not found" });
    }
    const data = response.data;
    const cepFormated = data.cep.replace("-", "");
    const label = `${data.logradouro}, ${data.localidade}`;
    return {
      cep: cepFormated,
      label: label,
      logradouro: data.logradouro,
      complemento: data.complemento,
      bairro: data.bairro,
      localidade: data.localidade,
      uf: data.uf,
      ibge: data.ibge,
      gia: data.gia,
      ddd: data.ddd,
      siafi: data.siafi,
    };
  } catch (error) {
    throw new AxiosError({ message: error.message });
  }
};

export const cepService = {
  getCep,
};
