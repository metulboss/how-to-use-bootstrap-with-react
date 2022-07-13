import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

const ReactBootstarp = () => {
    return (
        <Card style={{width:'20rem'}}>
           <Card.Body>
           <h1>Card Title</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, corrupti.</p>
           <Button>Learn More</Button>
           </Card.Body>
        </Card>
    );
};

export default ReactBootstarp;