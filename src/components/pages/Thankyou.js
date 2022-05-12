import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Thankyou = () => {

    let navigate = useNavigate();

  return (
    <div>
        <Container>
            <h3 className="display-3 text-center">Thank you!</h3>
            <p className='text-center'>Your order is placed. Our manager will contact you shortly for details!</p>
            <Button variant='danger' style={{margin: "0 auto"}} onClick={()=>{navigate("/")}}>Continue shopping</Button>
        </Container>
    </div>
  )
}

export default Thankyou;