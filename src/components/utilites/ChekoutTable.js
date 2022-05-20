import React, { useRef, useContext } from 'react'
import { Button } from 'react-bootstrap';
import { MyContext } from '../context/configContext';

const ChekoutTable = ({price, image, product_name, id}) => {

  //const [itemQuantity, setItemQuantity] = useState(1)
  // eslint-disable-next-line
  //const [itemCartPrice, setItemCartPrice] = useState(price)
  const { itemsInCart, setItemsInCart } = useContext(MyContext)
  const cardRef = useRef()

  function handleDeleteItem(){
    setItemsInCart(prev => prev.filter(product => product.id !== Number(cardRef.current.id)));
    console.log(itemsInCart)
  }

  return (
    <div className='checkOutTable' id={id} style={{display: 'flex', justifyContent: 'space-between', margin: '1.5em auto', alignItems: 'center', borderBottom: "1px solid #000", paddingBottom: "1em"}} ref={cardRef}>
        <img src={image} alt="prod pic" style={{widt: '100px', height: '50px'}}/>
        <h5 className='display-7'>{product_name}</h5>
        {/*<Button variant="success" size='sm' onClick={() => setItemQuantity(prev => prev -1)}>-</Button>
        <span>{itemQuantity}</span>
  <Button variant="success" size='sm' onClick={() => setItemQuantity(prev => prev +1)}>+</Button>*/}
        <Button variant="danger" size='sm' onClick={(cardRef) => handleDeleteItem()}>DELETE</Button>
        <span className='display-7'>{(price).toFixed(2)}$</span>
    </div>
  )
}

export default ChekoutTable;