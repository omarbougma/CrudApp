import React, { Component } from "react";
import ClientServices from "../services/ClientServices";
import Navigation from "../layout/Navigation";

class ClientList extends Component {
  constructor(props) {
    super(props);

    this.state = { clients: [] };

    this.editClient = this.editClient.bind(this);
    this.deleteClient = this.deleteClient.bind(this);
  }

  viewClient(id) {
    this.props.history.push(`view-client/${id}`);
  }
  deleteClient(id) {
    ClientServices.deleteClientById(id).then((res) => {
      this.setState({
        clients: this.state.clients.filter((client) => client.id !== id),
      });
    });
  }
  editClient(id) {
    this.props.history.push(`/update-client/${id}`);
  }

  componentDidMount() {
    ClientServices.getClients().then((res) => {
      this.setState({ clients: res.data });
    });
  }

  render() {
    return (
      <div>
        <Navigation />
        <h2 className="text-center my-3">Clients list</h2>
        <div className="container">
          <table className="table table-bordered border-secondary text-center">
            <thead>
              <tr>
                <th scope="col">Client id</th>
                <th scope="col">Client name</th>
                <th scope="col">Client age</th>
                <th scope="col">Edit Client </th>
              </tr>
            </thead>
            <tbody>
              {this.state.clients.map((client) => (
                <tr key={client.id}>
                  <td>{client.id}</td>
                  <td>{client.name}</td>
                  <td>{client.age}</td>
                  <td>
                    <button
                      class="btn btn-info "
                      onClick={() => this.viewClient(client.id)}
                    >
                      View
                    </button>
                    <button
                      class="btn btn-secondary mx-2"
                      onClick={() => this.editClient(client.id)}
                    >
                      Edit
                    </button>
                    <button
                      class="btn btn-danger"
                      onClick={() => this.deleteClient(client.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ClientList;
