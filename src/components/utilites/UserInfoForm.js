import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const UserInfoForm = () => {

    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        navigate("/thankyou");
    }

  return (
    <div className='userInfoForm'>
        <h3 className='display-5 text-center'>Please fill your shipping information</h3>
        <Form>
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
        
            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Cellphone</Form.Label>
                <Form.Control type="phone" placeholder="Cellphnone" />
            </Form.Group>
            </Row>
        
            <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
            </Form.Group>
        
        
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
            </Form.Group>
        
            <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
            </Form.Group>
            </Row>
        
            <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
                Place Order
            </Button>
        </Form>
    </div>
  )
}

export default UserInfoForm;