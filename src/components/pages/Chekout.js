import React, { useContext, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import ChekoutTable from '../utilites/ChekoutTable';
import UserInfoForm from '../utilites/UserInfoForm';
import { MyContext } from '../context/configContext';


const Chekout = () => {

  const { itemsInCart } = useContext(MyContext)
  // console.log(itemsInCart)
  const [formIsShown, setFormIsShown] = useState(false)

  return (
    <div className="chekout" style={{margin: '2em auto'}}>
      <Container>
        {itemsInCart.length < 1 && <h3 classname='display-6'>Your cart is empty. Please add products...</h3>}
        <div className="chekouts">
          {itemsInCart.map((product, index) => (
            <ChekoutTable 
              product_name={product.prod_name}
              image={product.prod_pic}
              price={product.prod_price}
            />
          ))}
          
          {itemsInCart.length > 1 && <h3 className='display-6' style={{textAlign: 'right'}}>Total: <span>0</span>$</h3>}
        </div>
        {itemsInCart.length > 1 && <Button variant='danger' onClick={() => setFormIsShown(prev => !prev)}>Proceed Chekout</Button>}
        {formIsShown && <UserInfoForm/>}
      </Container>
    </div>
  )
}

export default Chekout;