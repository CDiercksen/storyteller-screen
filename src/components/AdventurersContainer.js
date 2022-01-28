import React from "react";
import { Container } from "react-bootstrap";
import AdventurerCard from "./AdventurerCard";

function AdventurersContainer({ adventuringParty }) {
    return (
        <div>
        <Container>
            <ul className="cards">{adventuringParty.map((adventurer) =>
            <AdventurerCard 
                key={adventurer.id}
                adventurer={adventurer}
            />
            )}</ul>
        </Container>

 </div>   
 )
}

export default AdventurersContainer;