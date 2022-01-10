import React from "react";
import { Container } from "react-bootstrap";
import Dice from "./Dice"



function App() {
  return (
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header">hello world</h1>
      <Dice />
      

    </Container>
  );
}

export default App;
