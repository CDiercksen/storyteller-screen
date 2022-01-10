import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";


function Dice() {
    const [diceResults, setDiceResults] = useState(1)
    
    function rollD100() {
        setDiceResults(Math.floor(Math.random() * 100) + 1);
        console.log(diceResults);
    }

    function rollD20() {
        setDiceResults(Math.floor(Math.random() * 20) + 1);
        console.log(diceResults);
    }
    
    return (
        <div>
            <Container className="p-5 mb-4 bg-light rounded-3">
                <Button onClick={rollD20}>D20</Button>
                <Button onClick={rollD100}>D100</Button>
            </Container>
        </div>
    )
}

export default Dice;

// To Do List: 
//import boostrap grid and stack components and utilize
// Build Roll Tables Resource in backend
// Build table Components in frontent: 
//      include name, roll button, clear button, 
//      container to hold results
// connect frontend to backend for tables
// Build Player Character Resource in Backend
// Build Player Character List component in frontend
// Build AddPlayerCharacter form component in frontend
// connect player character frontend to backend
