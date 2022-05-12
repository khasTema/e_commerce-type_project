import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

const Store = () => {
  return (
    <div className='store'>
        <Container text-center>
            <h1 className="display-2 text-center">Products</h1>
            <Row>
                <ProductCard number={1} price={22.99}/>
                <ProductCard number={2} price={16.88}/>
                <ProductCard number={3} price={23.65}/>
                <ProductCard number={4} price={15.55}/>
                <ProductCard number={5} price={133.99}/>
                <ProductCard number={6} price={8.99}/> 
                <ProductCard number={7} price={133.99}/>
                <ProductCard number={8} price={8.99}/> 
            </Row>
        </Container>
    </div>
  )
}

export default Store;