import React from "react";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import Dice from "./Dice"
import NavBar from "./NavBar";



function App() {
  return (
    <div>
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header">Storyteller Screen</h1>
      <NavBar />
      <Switch>
        <Route exact path="/dice">
          <Dice />
        </Route>
      </Switch>
    </Container>
    </div>
  );
}

export default App;
