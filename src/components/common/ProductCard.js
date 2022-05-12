import React from 'react'
import { Card, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({number, price}) => {

    let navigate = useNavigate();

  return (
    <Col>
        <Card style={{ width: '18rem', marginTop: '2em' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/20x15" />
            <Card.Body>
                <Card.Title>Product {number}</Card.Title>
                <Card.Text>
                    <p>Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>
                    <span>Price: {price}$</span>
                </Card.Text>
                <Button variant="danger" size="sm" style={{marginRight: '1em'}}>ADD TO CART</Button>
                <Button variant="outline-secondary" size="sm" onClick={()=>{navigate("/product")}}>VIEW PRODUCT</Button>
            </Card.Body>
        </Card>
    </Col>
    )
}

export default ProductCard;