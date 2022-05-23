import React, { useState, useContext, useRef } from 'react';
import '../../styles/ProductPage.css'
import { 
  Button, 
  Card, 
  Container, 
  OverlayTrigger, 
  Tooltip 
} from 'react-bootstrap';
import { BiShare } from 'react-icons/bi';
import { 
  AiOutlineHeart, 
  AiFillHeart 
} from 'react-icons/ai';
import { MyContext } from '../context/configContext';
import Toastery from '../utilites/Toastery';

const ProductPage = () => {

  const [ isLiked, setIsLiked] = useState(false)
  const { itemOnProductPage , setItemsInCart, products, notify } = useContext(MyContext)
  const cardRef = useRef()

  function handleAddToCart(){
    setItemsInCart(prev => [...prev, products.filter(product => product.id === Number(cardRef.current.id))[0]]);
    notify();
}

  return (
    <div 
      className='product__dipslay'
      id={itemOnProductPage.id} 
      ref={cardRef}
    >
      <Container 
        className='product_page_container'
      >
        <div 
          className="product_image" 
        >
          <img 
            src={itemOnProductPage.prod_pic} 
            alt="product" 
            style={{
              width: '100%'
            }}
          />
        </div>
        <Card 
          className="product_page_card"
        >
          <Card.Title 
            className='display-4'
          >
            {itemOnProductPage.prod_name}
          </Card.Title>
          <Card.Subtitle 
            className="mb-2 text-muted">
              {itemOnProductPage.prod_brand}
            </Card.Subtitle>
          <Card.Text>
            {itemOnProductPage.prod_descr}
          </Card.Text>
          <Card.Text>
            Price: {itemOnProductPage.prod_price}$ 
            <br/>  
            <span 
              style={{
                color: "#717980"
              }}
            >
              MSRP:{itemOnProductPage.prod_price + 10}$
            </span>
          </Card.Text>
          <div 
            className="button_group" 
            style={{
              display: 'flex'
            }}
          >
            <Button 
              variant='danger' 
              style={{
                marginRight: '.3em'
              }} 
              onClick={(cardRef) => handleAddToCart()}
            >
              ADD TO CART
            </Button>
            <OverlayTrigger 
              overlay={
                  <Tooltip 
                    id="tooltip-disabled"
                  >
                    {
                      isLiked ? 'Already Liked!' : 'Like this product?'
                    }
                    </Tooltip>
                  }
              >
              <span className="d-inline-block">
                <Button 
                  variant='success' 
                  style={{
                    marginRight: '.3em'
                  }} 
                  onClick={() => setIsLiked(prev => !prev)}
                >
                  {
                    isLiked ? <AiFillHeart/> : <AiOutlineHeart/>
                  }
                </Button>
              </span>
            </OverlayTrigger>
            <OverlayTrigger 
              overlay={
                <Tooltip id="tooltip-disabled">Copy link</Tooltip>
              }
            >
              <span className="d-inline-block">
                <Button 
                  variant='warning' 
                  style={{
                    marginRight: '.3em'
                  }}
                >
                  <BiShare/>
                </Button>
              </span>
            </OverlayTrigger>
          </div>
        </Card>
      </Container>
      <Toastery/>
    </div>
  )
}

export default ProductPage;