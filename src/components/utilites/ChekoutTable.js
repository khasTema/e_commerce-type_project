import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const ChekoutTable = ({price, image, product_name}) => {

  const [itemQuantity, setItemQuantity] = useState(1)
  // eslint-disable-next-line
  const [itemCartPrice, setItemCartPrice] = useState(price)

  return (
    <div className='checkOutTable' style={{display: 'flex', justifyContent: 'space-between', margin: '1.5em auto', alignItems: 'center'}}>
        <img src={image} alt="prod pic" style={{widt: '100px', height: '50px'}}/>
        <h5 className='display-7'>{product_name}</h5>
        <Button variant="success" size='sm' onClick={() => setItemQuantity(prev => prev -1)}>-</Button>
        <span>{itemQuantity}</span>
        <Button variant="success" size='sm' onClick={() => setItemQuantity(prev => prev +1)}>+</Button>
        <Button variant="danger" size='sm'>DELETE</Button>
        <Button variant="warning" disabled>{(itemCartPrice * itemQuantity).toFixed(2)}$</Button>
        <hr/>
    </div>
  )
}

export default ChekoutTable;