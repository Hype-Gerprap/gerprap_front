import axios from "axios";

const instructor = "apartamento";
const root_url = "http://localhost:8080";
const apartamento_api_url = `${root_url}/${instructor}`;

class ApartamentoDataService {
  retriveAllApartamentos() {
    return axios.get(`${apartamento_api_url}/all-apartamentos`);
  }

  retrieveApartamento(name, id) {
    return axios.get(`${apartamento_api_url}/apartamento-id=${id}`);
  }

  deleteApartamento(name, id) {
    return axios.delete(`${apartamento_api_url}/delete-apartamento=${id}`);
  }

  updateApartamento(name, id, apartamento) {
    return axios.put(`${apartamento_api_url}/update-apartamento=${id}`, apartamento);
  }

  createApartamento(name, apartamento) {
    return axios.post(`${apartamento_api_url}/insert-apartamento`, apartamento);
  }
}

export default new ApartamentoDataService();