import React from 'react'
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <div 
      className='footer' 
      style={{ 
        background: 'black', 
        color: 'lightgrey', 
        marginTop: '5em'
      }}>
        <Container>
            <h4 
              className='display-3'>
                This is footer
            </h4>
            <span>Some text and info will go here</span>
        </Container>
    </div>
  )
}

export default Footer;