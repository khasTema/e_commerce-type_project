import React from 'react';
import { Container } from 'react-bootstrap';
import ChekoutTable from '../utilites/ChekoutTable';
import UserInfoForm from '../utilites/UserInfoForm';

//temp data
const tempData = [
  {
    prod_name: 'Some product #1',
    prod_pic: 'https://picsum.photos/75/50?random=5',
    prod_price: 33.45
  },
  {
    prod_name: 'Another product #2',
    prod_pic: 'https://picsum.photos/75/50?random=6',
    prod_price: 67.89
  },
  {
    prod_name: 'New product #3',
    prod_pic: 'https://picsum.photos/75/50?random=2',
    prod_price: 24.99
  },
  {
    prod_name: 'Old product #4',
    prod_pic: 'https://picsum.photos/75/50?random=3',
    prod_price: 17.88
  }
]
//temp to del ^^^

const Chekout = () => {
  return (
    <div className="chekout" style={{margin: '2em auto'}}>
      <Container>
        <div className="chekouts">
          {tempData.map((product) => (
            <ChekoutTable 
              product={product.prod_name}
              image={product.prod_pic}
              price={product.prod_price}
            />
          ))}
          
          <h3 className='display-6' style={{textAlign: 'right'}}>Total: <span>34</span>$</h3>
        </div>
        <UserInfoForm/>
      </Container>
    </div>
  )
}

export default Chekout;