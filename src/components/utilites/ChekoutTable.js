import React from 'react'
import { Button } from 'react-bootstrap';

const ChekoutTable = () => {
  return (
    <div className='checkOutTable' style={{display: 'flex', justifyContent: 'space-between', margin: '1.5em auto', alignItems: 'center'}}>
        <img src="https://picsum.photos/75/50?random=5" alt="prod pic" />
        <h5 className='display-6'>Product name</h5>
        <Button variant="success" size='sm'>-</Button>
        <span>Quantity: 0</span>
        <Button variant="success" size='sm'>+</Button>
        <Button variant="danger" size='sm'>DELETE</Button>
        <Button variant="warning" disabled>33$</Button>
        <hr/>
    </div>
  )
}

export default ChekoutTable;