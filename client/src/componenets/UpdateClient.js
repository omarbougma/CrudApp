import React, { Component } from "react";
import Navigation from "../layout/Navigation";
import ClientServices from "../services/ClientServices";

class UpdateClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      name: "",
      age: "",
    };

    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeAgeHandler = this.changeAgeHandler.bind(this);
    this.updateClient = this.updateClient.bind(this);
    this.goback = this.goback.bind(this);
  }

  componentDidMount() {
    ClientServices.getClientById(this.state.id).then((res) => {
      let client = res.data;
      this.setState({
        name: client.name,
        age: client.age,
      });
    });
  }

  updateClient = (e) => {
    e.preventDefault();
    let client = { name: this.state.name, age: this.state.age };
    ClientServices.updateClient(this.state.id, client).then((res) => {
      this.props.history.push("/list");
    });
  };
  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  changeAgeHandler = (event) => {
    this.setState({ age: event.target.value });
  };

  goback() {
    this.props.history.push("/list");
  }

  render() {
    return (
      <div>
        <Navigation />
        <div align="center" className="form-cont container mt-5">
          <form className="form">
            <label className="form-label elements">Name</label>
            <input
              className="form-control"
              name="name"
              value={this.state.name}
              onChange={this.changeNameHandler}
            />
            <br />
            <label className="form-label elements">Age</label>
            <input
              className="form-control mb-3"
              name="age"
              value={this.state.age}
              onChange={this.changeAgeHandler}
            />
            <button
              className="btn btn-secondary mx-2"
              onClick={this.updateClient}
            >
              Save
            </button>
            <button className="btn btn-danger" onClick={this.goback}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default UpdateClient;
