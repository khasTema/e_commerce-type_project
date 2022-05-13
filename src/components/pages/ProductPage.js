import React, { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { BiShare } from 'react-icons/bi';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const ProductPage = () => {

  const [ isLiked, setIsLiked ] = useState(false)

  return (
    <div>
      <Container style={{display: 'flex', justifyContent: 'space-between'}}>
        <div className="product_image" style={{width:"48%"}}>
          <img src="https://picsum.photos/200/150?random=3" alt="product" style={{width: '100%'}}/>
        </div>
        <Card style={{width: '48%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: 'none'}}>
          <Card.Title className='display-4'>Product Name</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Short description</Card.Subtitle>
          <Card.Text>
            Something about the product that is represented on this page. In order you would like to sell it fater.
          </Card.Text>
          <Card.Text>
            Price: 45.88$  MSRP: 50.99$
          </Card.Text>
          <div className="button_group" style={{display: 'flex'}}>
            <Button variant='danger' style={{marginRight: '.3em'}}>ADD TO CART</Button>

            <Button variant='success' style={{marginRight: '.3em'}} onClick={() => setIsLiked(prev => !prev)}>
              {isLiked ? <AiFillHeart/> : <AiOutlineHeart/>}
            </Button>

            <Button variant='warning' style={{marginRight: '.3em'}}><BiShare/></Button>
          </div>
        </Card>
      </Container>
    </div>
  )
}

export default ProductPage;