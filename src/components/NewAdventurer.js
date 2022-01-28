import React, { useState } from "react";
import { Form , Button} from "react-bootstrap";

function NewAdventurer() {
const [name, setName] = useState('')
const [armorClass, setArmorClass] = useState('')
const [hitPointMax, setHitPointMax] = useState('')
const [spellSaveDc, setSpellSaveDc] = useState('')

return (
    <Form>
        <Form.Group className="mb-3" controlId="adventurerName">
            <Form.Label>Adventurer's Name</Form.Label>
            <Form.Control type="name" placeholder="Enter Name"></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="armorClass">
            <Form.Label>Armor Class</Form.Label>
            <Form.Control type="armorClass" placeholder="AC"></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="hitPointMaximum">
            <Form.Label>Max HP</Form.Label>
            <Form.Control type="hitPointMax" placeholder="Max HP"></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="spellSaveDc">
            <Form.Label>Spell Save DC</Form.Label>
            <Form.Control type="spellSaveDc" placeholder="DC"></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
        ) 
}


export default NewAdventurer;