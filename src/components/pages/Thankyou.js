import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Thankyou = () => {

    let navigate = useNavigate();

  return (
    <div>
        <Container style={{textAlign: 'center'}}>
            <h3 className="display-3 ">Thank you!</h3>
            <p>Your order is placed. Our manager will contact you shortly for details!</p>
            <Button variant='outline-danger' onClick={()=>{navigate("/")}}>Continue shopping</Button>
        </Container>
    </div>
  )
}

export default Thankyou;