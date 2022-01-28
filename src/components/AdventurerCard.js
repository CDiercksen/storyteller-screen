import React from "react";
import { Card } from "react-bootstrap";

function AdventurerCard({ adventurer }) {
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
                </Card.Body>
            </Card>
        </li>
    )

}

export default AdventurerCard;