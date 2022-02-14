import React from "react";
import { Card, Button } from "react-bootstrap";


function AdventurerCard({ adventurer, API_Path, onDeleteAdventurer }) {
    function handleDelete(){
        fetch(`${API_Path}/${adventurer.id}`, {
            method:'DELETE',
        })
        // .then(res => res.json())
        .then(() => onDeleteAdventurer(adventurer));
    };
    
    return (
        <li className="card">
            <Card>
                <Card.Body>
                    <Card.Title>
                        {adventurer.name}
                    </Card.Title>
                    <Card.Text>
                        Hit Point Max: {adventurer.hit_point_maximum}
                    </Card.Text>
                    <Card.Text>
                        Armor Class: {adventurer.armor_class}
                    </Card.Text>
                    <Card.Text>
                        Spell DC: {adventurer.spell_dc}
                    </Card.Text>
                    <Button variant="danger" onClick={handleDelete} >Delete PC?</Button>
                </Card.Body>
            </Card>
        </li>
    )

}

export default AdventurerCard;