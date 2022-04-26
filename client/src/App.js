import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddClient from "./componenets/AddClient";
import ClientList from "./componenets/ClientList";
import UpdateClient from "./componenets/UpdateClient";
import ViewClient from "./componenets/ViewClient";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={ClientList}></Route>
          <Route path="/list" component={ClientList}></Route>
          <Route path="/add-client" component={AddClient}></Route>
          <Route path="/update-client/:id" component={UpdateClient}></Route>
          <Route path="/view-client/:id" component={ViewClient}></Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
