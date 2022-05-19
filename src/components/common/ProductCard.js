import React, { useRef } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const ProductCard = ({
    product_brand, 
    product_category, 
    product_description, 
    product_image, 
    product_name, 
    product_price,
}) => {

    let navigate = useNavigate();
    const cardRef = useRef()

    function handleAddToCart(){
        console.log(cardRef.current)
      }
    

  return (
    <Col style={{display:"flex", justifiContent:"center"}} ref={cardRef}>
        <Card style={{ width: '30%', minWidth: '18em', marginTop: '2em' }}>
            <Card.Img variant="top" src={product_image} />
            <Card.Body>
                <Card.Title >{product_name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{product_brand}</Card.Subtitle>
                <Card.Text>
                    <p>{product_description}</p>
                    <span>Price: {product_price}$</span>
                    <br/>
                    <span className="mb-2 text-muted">Category: {product_category}</span>
                </Card.Text>
                <Button variant="danger" size="sm" style={{marginRight: '1em'}} onClick={(cardRef) => handleAddToCart()}>ADD TO CART</Button>
                <Button variant="outline-secondary" size="sm" onClick={()=>{navigate("/product")}}>VIEW PRODUCT</Button>
            </Card.Body>
        </Card>
    </Col>
    )
}

export default ProductCard;