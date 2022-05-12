import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';

const ProductPage = () => {
  return (
    <div>
      <Container style={{display: 'flex', justifyContent: 'space-between'}}>
        <div className="product_image" style={{width:"45%"}}>
          <img src="https://picsum.photos/200/150?random=3" alt="product" style={{width: '100%'}}/>
        </div>
        <Card style={{width: '45%'}}>
          <Card.Title>Product Name</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Short description</Card.Subtitle>
          <Card.Text>
            Something about the product that is represented on this page. In order you would like to sell it fater.
          </Card.Text>
          <div className="button_group" style={{display: 'flex', justifyContent: 'space-around', marginTop:'auto'}}>
            <Button>ADD TO CART</Button>
            <Button>LIKE</Button>
            <Button>SAVE</Button>
          </div>
        </Card>
      </Container>
    </div>
  )
}

export default ProductPage;