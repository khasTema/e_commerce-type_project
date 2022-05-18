import React, { useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../context/configContext';

const Thankyou = () => {

    let navigate = useNavigate();
    const {anotherThing, setAnotherThing} = useContext(MyContext)

  return (
    <div>
        <Container style={{textAlign: 'center'}}>
            <h3 className="display-3 ">Thank you!</h3>
            <button onClick={() => setAnotherThing(prev => prev+2)}>{anotherThing}</button>
            <p>Your order is placed. Our manager will contact you shortly for details!</p>
            <Button variant='outline-danger' onClick={()=>{navigate("/")}}>Continue shopping</Button>
        </Container>
    </div>
  )
}

export default Thankyou;