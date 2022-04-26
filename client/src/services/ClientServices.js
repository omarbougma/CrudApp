import axios from "axios";

const CLIENT_API_URL = "http://localhost:8000/api";

class ClientServices {
  getClients() {
    return axios.get(CLIENT_API_URL + "/clients");
  }

  addClient(client) {
    return axios.post(CLIENT_API_URL + "/", client);
  }

  getClientById(id) {
    return axios.get(CLIENT_API_URL + "/" + id);
  }

  deleteClientById(id) {
    return axios.delete(CLIENT_API_URL + "/delete/id/" + id);
  }

  updateClient(id, client) {
    return axios.put(CLIENT_API_URL + "/update/id/" + id, client);
  }

  getClientInfoById(id) {
    return axios.get(CLIENT_API_URL + "/info/id/" + id);
  }
}

export default new ClientServices();
