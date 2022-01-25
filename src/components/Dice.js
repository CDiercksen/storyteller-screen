import React, { useState } from "react";
import { Container, Button, Stack } from "react-bootstrap";


function Dice() {
    const [diceResults, setDiceResults] = useState(1)
  
    function rolld4() {
        setDiceResults(Math.floor(Math.random() * 4) + 1);
    }
    function rolld6() {
        setDiceResults(Math.floor(Math.random() * 6) + 1);
    }
    function rolld8() {
        setDiceResults(Math.floor(Math.random() * 8) + 1);
    }
    function rolld10() {
        setDiceResults(Math.floor(Math.random() * 10) + 1);
    }
    function rolld12() {
        setDiceResults(Math.floor(Math.random() * 12) + 1);
    }
    function rollD100() {
        setDiceResults(Math.floor(Math.random() * 100) + 1);  
    }
    function rollD20() {
        setDiceResults(Math.floor(Math.random() * 20) + 1);
    }
    
    return (
        <div>
            <Container>
            <h2>Dice Rollers</h2>
            <Stack direction="horizontal" gap={3}>
            <Button onClick={rolld4}>D4</Button>
                <Button onClick={rolld6}>D6</Button>
                <Button onClick={rolld8}>D8</Button>
                <Button onClick={rolld10}>D10</Button>
                <Button onClick={rolld12}>D12</Button>
                <Button onClick={rollD20}>D20</Button>
                <Button onClick={rollD100}>D100</Button>
            </Stack>
            <h3>Roll Result:{diceResults}</h3>
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
