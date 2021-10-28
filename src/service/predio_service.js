import axios from "axios";

const instructor = "predio";
const root_url = "http://localhost:8080";
const predio_api_url = `${root_url}/${instructor}`;

class PredioDataService {
  retriveAllPredios() {
    return axios.get(`${predio_api_url}/all-predios`);
  }

  retrievePredio(name, id) {
    return axios.get(`${predio_api_url}/predio-id=${id}`);
  }

  deletePredio(name, id) {
    return axios.delete(`${predio_api_url}/delete-predio=${id}`);
  }

  updatePredio(name, id, predio) {
    return axios.put(`${predio_api_url}/update-predio=${id}`, predio);
  }

  createPredio(name, predio) {
    return axios.post(`${predio_api_url}/insert-predio`, predio);
  }
}

export default new PredioDataService();