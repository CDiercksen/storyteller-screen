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
        <Container className="p-5 mb-4 bg-light rounded-3">
            <Button onClick={rollD100}>D100</Button>
            
            <Button onClick={rollD20}>D20</Button>
        </Container>
    )
}

export default Dice;