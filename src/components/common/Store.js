import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

const Store = () => {
  return (
    <div className='store'>
        <Container text-center>
            <h1 className="display-2">Products</h1>
            <Row>
                <ProductCard number={1}/>
                <ProductCard number={2}/>
                <ProductCard number={3}/>
                <ProductCard number={4}/>
                <ProductCard number={5}/>
                <ProductCard number={6}/> 
            </Row>
        </Container>
    </div>
  )
}

export default Store;