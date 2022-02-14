import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import Dice from "./Dice"
import NavBar from "./NavBar";
import AdventurersContainer from "./AdventurersContainer";

// update state, which triggers re-render, so no refresh needed
//  validations: Error messages (for example, don't submit an empty form)
const API_Path = `http://127.0.0.1:3001/adventurers`

function App() {
  const [adventuringParty, setAdventuringParty] = useState([]);

  useEffect(() => {
    fetch(API_Path)
    .then(res => res.json())
    .then(data => setAdventuringParty(data))
  }, []);
  // console.log(adventurers);

  function handleAddAdventurer(newAdventurer){
    setAdventuringParty([...adventuringParty, newAdventurer])
  }

  function handleDeleteAdventurer(deletedAdventurer) {
    // debugger
    const updatedAdventuringParty = adventuringParty.filter((adventurer) => adventurer.id !== deletedAdventurer.id);
    setAdventuringParty(updatedAdventuringParty);
  }


  return (
    <div>
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header">Storyteller Screen</h1>
      <NavBar />
      <Switch>
        <Route exact path="/">
      <h2>Welcome to your personalized Storytelling Screen!</h2>
      <p>Feel free to use our dice roller, and Player Character Organizer through the buttons above.
        And since this site is under constant revision, be sure to check back often for new features!
      </p>
        </Route>
        <Route exact path="/dice">
          <Dice />
        </Route>
        <Route exact path="/adventurers">
          <AdventurersContainer 
            adventuringParty={adventuringParty} 
            API_Path={API_Path} 
            onAddAdventurer={handleAddAdventurer}
            onDeleteAdventurer={handleDeleteAdventurer}/>
        </Route>
        <Route path="/*">
          {/* create 404 error component with link back tohome */}
        </Route>
      </Switch>
    </Container>
    </div>
  );
}

export default App;
