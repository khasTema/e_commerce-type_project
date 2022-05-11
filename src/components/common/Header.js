import React from 'react';
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
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavbarBrand>
                    <Link to='/'>
                        Place for Logo
                    </Link>
                </NavbarBrand>
                <Nav>
                    <NavLink>
                        <Link to='/'>
                            Home
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link to='/chekout'>
                            Chekout
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link to='/about'>
                            About
                        </Link>
                    </NavLink>
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
                <Button variant="warning">
                    <RiShoppingCartLine/>
                    <Badge pill bg="danger">10</Badge>
                </Button> 
            </Container>
        </Navbar>
    </div>
  )
}

export default Header;