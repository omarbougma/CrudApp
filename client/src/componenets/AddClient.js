import React, { Component } from "react";
import Navigation from "../layout/Navigation";
import "../styles/clientList.css";
import ClientServices from "../services/ClientServices";

class AddClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
    };

    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeAgeHandler = this.changeAgeHandler.bind(this);
    this.saveClient = this.saveClient.bind(this);
  }

  saveClient = (e) => {
    e.preventDefault();
    let client = { name: this.state.name, age: this.state.age };
    ClientServices.addClient(client).then((res) => {
      this.props.history.push("/list");
    });
  };
  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  changeAgeHandler = (event) => {
    this.setState({ age: event.target.value });
  };

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
            <button className="btn btn-secondary" onClick={this.saveClient}>
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddClient;
