import React from 'react';
import logo from '../../images/logo_transparent.png';
import { 
    Badge,
    Button, 
    Container, 
    Form, 
    FormControl, 
    Nav, 
    Navbar, 
    NavbarBrand, 
    NavLink 
} from 'react-bootstrap';
import { RiSearch2Line, RiShoppingCartLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';

const Header = () => {

    let navigate = useNavigate();

  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <NavbarBrand onClick={() => {navigate('/')}}>
                    <div className="logo_place" style={{width: 175, height: 75, cursor: "pointer"}}>
                        <img src={logo} alt="some shop logo" style={{width:"100%", height: "100%",objectFit: 'cover'}}/>
                    </div>
                </NavbarBrand>
                <Nav>
                    <NavLink onClick={() => {navigate('/')}} >Home</NavLink>
                    <NavLink onClick={() => {navigate('/chekout')}} >Chekout</NavLink>
                    <NavLink onClick={() => {navigate('/about')}} >About</NavLink>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search products..."
                        className="me-2"
                    />
                    <Button variant="success">
                        <RiSearch2Line/>
                    </Button>
                </Form>
                <Button variant="warning" onClick={()=> {navigate('/chekout')}} >
                    <RiShoppingCartLine/>
                    <Badge pill bg="danger">10</Badge>
                </Button> 
            </Container>
        </Navbar>
    </div>
  )
}

export default Header;