import React, { useContext } from 'react'
import { Carousel, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../context/configContext';

const Hero = () => {

    let navigate = useNavigate();
    const {products, setDisplayCategory} = useContext(MyContext)

    function handleLearnMore(){
        setDisplayCategory('man');
        navigate('/category');
    }
   

  return (
    <>
        <Carousel fade>
            {products.filter(product => product.featured).map(product => (
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={product.prod_pic}
                        alt="first slide"
                    />
                    <Carousel.Caption>
                        <h3>{product.prod_name}</h3>
                        <p>Brand: {product.prod_brand}</p>
                        <Button 
                            variant="outline-light" 
                            size="lg" 
                            onClick={() => handleLearnMore()}
                        >
                            LEARN MORE
                        </Button>
                    </Carousel.Caption> 
                </Carousel.Item>
            ))}   
        </Carousel>
    </>
  )
}

export default Hero;