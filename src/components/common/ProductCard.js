import React from 'react'
import { Card, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({
    product_brand, 
    product_category, 
    product_description, 
    product_image, 
    product_name, 
    product_price
}) => {

    let navigate = useNavigate();

  return (
    <Col style={{display:"flex", justifiContent:"center"}}>
        <Card style={{ width: '30%', minWidth: '18em', marginTop: '2em' }}>
            <Card.Img variant="top" src={product_image} />
            <Card.Body>
                <Card.Title>{product_name}</Card.Title>
                <Card.Text>
                    <p>{product_brand} {product_description}</p>
                    <span>Price: {product_price}$</span>
                    <br/>
                    <span>Category: {product_category}</span>
                </Card.Text>
                <Button variant="danger" size="sm" style={{marginRight: '1em'}}>ADD TO CART</Button>
                <Button variant="outline-secondary" size="sm" onClick={()=>{navigate("/product")}}>VIEW PRODUCT</Button>
            </Card.Body>
        </Card>
    </Col>
    )
}

export default ProductCard;