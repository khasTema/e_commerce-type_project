import React from 'react'
import { Carousel } from 'react-bootstrap';

const Hero = () => {
  return (
    <>
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://picsum.photos/800/400?random=1"
                    alt="first slide"
                />
                <Carousel.Caption>
                    <h3>Some TEXT here #1</h3>
                    <p>lorem ipsum dolor sit ammet</p>
                </Carousel.Caption> 
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://picsum.photos/800/400?random=2"
                    alt="second slide"
                />
                <Carousel.Caption>
                    <h3>Some TEXT here #2</h3>
                    <p>and now the new second slide</p>
                </Carousel.Caption>  
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://picsum.photos/800/400?random=3"
                    alt="third slide"
                />
                <Carousel.Caption>
                    <h3>Some TEXT here #3</h3>
                    <p>here is the third slider</p>
                </Carousel.Caption>  
            </Carousel.Item>
        </Carousel>
    </>
  )
}

export default Hero;