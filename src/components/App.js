import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import Dice from "./Dice"
import NavBar from "./NavBar";
import AdventurersContainer from "./AdventurersContainer";

const API_Path = `http://127.0.0.1:3001/adventurers`

function App() {
  const [adventuringParty, setAdventuringParty] = useState([]);

  useEffect(() => {
    fetch(API_Path)
    .then(res => res.json())
    .then(data => setAdventuringParty(data))
  }, []);
  // console.log(adventurers);

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
      <Switch>
        <Route exact path="/adventurers">
          <AdventurersContainer adventuringParty={adventuringParty} />
        </Route>
      </Switch>
    </Container>
    </div>
  );
}

export default App;
