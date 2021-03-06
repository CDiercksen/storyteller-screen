import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import AdventurerCard from "./AdventurerCard";
import NewAdventurer from "./NewAdventurer";

function AdventurersContainer({ adventuringParty, API_Path, onAddAdventurer, onDeleteAdventurer }) {
    const [showForm, setShowForm] = useState(false)
    function handleClick() {
        setShowForm((showForm) => !showForm)
        // console.log(showForm)
    }

    
    return (
        <div>
        <Container>
            <h3>Current Adventuring Party </h3>
            <ul className="cards">{adventuringParty.map((adventurer) =>
            <AdventurerCard 
                key={adventurer.id}
                adventurer={adventurer}
                API_Path={API_Path}
                onDeleteAdventurer={onDeleteAdventurer}
            />
            )}</ul>
            <Button 
                variant="outline-primary" 
                onClick={handleClick}>Add Adventurer</Button>
                {showForm ? <NewAdventurer API_Path={API_Path} onAddAdventurer={onAddAdventurer} /> : null }
        </Container>

 </div>   
 )
}

export default AdventurersContainer;