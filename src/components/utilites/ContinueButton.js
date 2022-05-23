import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { MyContext } from '../context/configContext';

const ContinueButton = () => {
   
    let navigate = useNavigate();
    const { setDisplayCategory } = useContext(MyContext)

  return (
    <Button variant='outline-danger' onClick={()=>{navigate("/"); setDisplayCategory('products');}}>Continue shopping</Button>
  )
}

export default ContinueButton;