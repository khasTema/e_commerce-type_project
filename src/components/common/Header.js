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

const Header = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavbarBrand href='/'>Place for Logo</NavbarBrand>
                <Nav>
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/">Chekout</NavLink>
                    <NavLink href="/">About</NavLink>
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