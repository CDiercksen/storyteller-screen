import React, { useState } from "react";
import { Form , Button} from "react-bootstrap";

function NewAdventurer({ API_Path }) {
const [name, setName] = useState('')
const [armorClass, setArmorClass] = useState('')
const [hitPointMax, setHitPointMax] = useState('')
const [spellSaveDc, setSpellSaveDc] = useState('')

function onSubmit(e){
    e.preventDefault()
    
    const adventurer = {
      name,
      armor_class: armorClass,
      hit_point_maximum: hitPointMax,
      spell_dc: spellSaveDc
    }
    fetch(`${API_Path}`,{
      method:'POST',
      headers : { 
        'Content-Type': 'application/json'
       },
      body: JSON.stringify(adventurer)
    })
    .then(res => res.json())
    .then(console.log)
  
}
return (
    <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="adventurerName">
            <Form.Label>Adventurer's Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name"></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="armorClass">
            <Form.Label>Armor Class</Form.Label>
            <Form.Control type="number" value={armorClass} onChange={(e) => setArmorClass(e.target.value)} placeholder="AC"></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="hitPointMaximum">
            <Form.Label>Max HP</Form.Label>
            <Form.Control type="number" value={hitPointMax} onChange={(e) => setHitPointMax(e.target.value)} placeholder="Max HP"></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="spellSaveDc">
            <Form.Label>Spell Save DC</Form.Label>
            <Form.Control type="number" value={spellSaveDc} onChange={(e) => setSpellSaveDc(e.target.value)} placeholder="DC"></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit" >
            Submit
        </Button>
    </Form>
        ) 
}


export default NewAdventurer;