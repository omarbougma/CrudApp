import React, { Component } from "react";
import ClientServices from "../services/ClientServices";

class ViewClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      client: {},
    };
    this.goback = this.goback.bind(this);
  }
  goback() {
    this.props.history.push("/list");
  }

  componentDidMount() {
    ClientServices.getClientInfoById(this.state.id).then((res) => {
      this.setState({ client: res.data });
    });
  }
  render() {
    return (
      <div align="center" className="container mt-5">
        <h2>Client N°: {this.state.client.id}</h2>
        <form className="viewForm">
          <div className="formElements">
            Name: <p>{this.state.client.name}</p>
          </div>
          <div className="formElements">
            Age: <p>{this.state.client.age}</p>
          </div>
          <button onClick={this.goback} className="btn btn-info mb-3">
            Go Back
          </button>
        </form>
      </div>
    );
  }
}
export default ViewClient;
