import React from 'react';
import { Container } from 'react-bootstrap';
import ContinueButton from '../utilites/ContinueButton';



const Thankyou = () => {

  return (
    <div>
        <Container style={{textAlign: 'center'}}>
            <h3 className="display-3 ">Thank you!</h3>
            <p>Your order is placed. Our manager will contact you shortly for details!</p>
            <ContinueButton/>
        </Container>
    </div>
  )
}

export default Thankyou;