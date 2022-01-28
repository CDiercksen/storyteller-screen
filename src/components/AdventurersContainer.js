import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import AdventurerCard from "./AdventurerCard";
import NewAdventurer from "./NewAdventurer";

function AdventurersContainer({ adventuringParty }) {
    const [showForm, setShowForm] = useState(false)
    function handleClick() {
        setShowForm((showForm) => !showForm)
        console.log(showForm)
    }

    // showForm = () => {
    //     return (
    //         <h4>form shown</h4>
    //     )
    // }
    
    return (
        <div>
        <Container>
            <h3>Current Adventuring Party </h3>
            <ul className="cards">{adventuringParty.map((adventurer) =>
            <AdventurerCard 
                key={adventurer.id}
                adventurer={adventurer}
            />
            )}</ul>
            <Button 
                variant="outline-primary" 
                onClick={handleClick}>Add Adventurer</Button>
                {showForm ? <NewAdventurer /> : null }
        </Container>

 </div>   
 )
}

export default AdventurersContainer;