import React from 'react'
import { Card, Col, Button } from 'react-bootstrap';

const ProductCard = ({number}) => {
  return (
    <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/20x15" />
            <Card.Body>
                <Card.Title>Card Title {number}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </Col>
    )
}

export default ProductCard;