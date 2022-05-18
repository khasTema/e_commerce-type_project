import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { MyContext } from '../context/configContext';




const Store = () => {
 
  const { products, displayCategory } = useContext(MyContext)

  return (
    <div className='store'>
        <Container text-center>
            <h1 className="display-2 text-center" style={{textTransform: 'capitalize'}}>{displayCategory}</h1>
            <Row>
               { products.map(product => (
                     <ProductCard
                       key={product.id} 
                       product_brand={product.prod_brand} 
                       product_category={product.prod_category} 
                       product_description={product.prod_descr}
                       product_image={product.prod_pic} 
                       product_name={product.prod_name}
                       product_price={product.prod_price}
                     />
                   ))}               
            </Row>
        </Container>
    </div>
  )
}

export default Store;