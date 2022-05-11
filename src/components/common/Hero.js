import React from 'react'
import { Carousel } from 'react-bootstrap';

const Hero = () => {
  return (
    <>
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400"
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
                    src="https://via.placeholder.com/800x400"
                    alt="second slide"
                />
                <Carousel.Caption>
                    <h3>Some TEXT here #2</h3>
                </Carousel.Caption> 
            </Carousel.Item>
        </Carousel>
    </>
  )
}

export default Hero;