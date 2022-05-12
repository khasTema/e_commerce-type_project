import React from 'react';
import { Container } from 'react-bootstrap';
import ChekoutTable from '../utilites/ChekoutTable';
import UserInfoForm from '../utilites/UserInfoForm';

const Chekout = () => {
  return (
    <div className="chekout" style={{margin: '2em auto'}}>
      <Container>
        <div className="chekouts">
          <ChekoutTable/>
          <ChekoutTable/>
          <ChekoutTable/>
          <ChekoutTable/>
          <h3 className='display-5' style={{textAlign: 'right'}}>Total: <span>34</span>$</h3>
        </div>
        <UserInfoForm/>
      </Container>
    </div>
  )
}

export default Chekout;