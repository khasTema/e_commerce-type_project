import React, { useContext} from 'react';
import '../../styles/Header.css'
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
    NavLink,
    NavDropdown 
} from 'react-bootstrap';
import { RiSearch2Line, RiShoppingCartLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../context/configContext';

const Header = () => {

    let navigate = useNavigate();
    const { setDisplayCategory, itemsInCart } = useContext(MyContext);

  return (
    <div>
        <Navbar 
            bg="dark" 
            variant="dark" 
            expand="lg"
        >
            <Container className='navbar__container'>
                <NavbarBrand 
                    onClick={() => {
                        navigate('/'); 
                        setDisplayCategory('products');
                    }}>
                    <div 
                        className="logo_place" 
                        style={{
                            width: 175, 
                            height: 75, 
                            cursor: "pointer"
                        }}>
                        <img 
                            src={logo} 
                            alt="some shop logo" 
                            style={{
                                width:"100%", 
                                height: "100%",
                                objectFit: 'cover'
                            }}/>
                    </div>
                </NavbarBrand>
                <Nav>
                    <NavLink 
                        onClick={() => {
                            navigate('/'); 
                            setDisplayCategory('products');
                        }} 
                    >
                        Home
                    </NavLink>
                    <NavDropdown 
                        title="Store"
                    >
                        <NavDropdown.Item 
                            onClick={() => {
                                navigate('/category'); 
                                setDisplayCategory('man');
                            }}
                        >
                                Man
                        </NavDropdown.Item>
                        <NavDropdown.Item 
                            onClick={() => {
                                navigate('/category'); 
                                setDisplayCategory('woman');
                            }}
                        >
                            Woman
                        </NavDropdown.Item>
                        <NavDropdown.Item 
                            onClick={() => {
                                navigate('/category'); 
                                setDisplayCategory('accessories');
                            }}
                        >
                            Accesorize
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavLink 
                        onClick={() => {
                            navigate('/chekout')
                        }} 
                    >
                        Chekout
                    </NavLink>
                    <NavLink 
                        onClick={() => {
                            navigate('/about')
                        }} 
                    >
                        About
                    </NavLink>
                </Nav>
                <Form 
                    className="d-flex"
                >
                    <FormControl
                        type="search"
                        placeholder="Search products..."
                        className="me-2"
                    />
                    <Button variant="success">
                        <RiSearch2Line/>
                    </Button>
                </Form>
                <Button 
                    className="btn-cart"
                    variant="warning" 
                    onClick={()=> {
                        navigate('/chekout')
                    }} 
                >
                    <RiShoppingCartLine/>
                    <Badge pill bg="danger">{itemsInCart.length}</Badge>
                </Button> 
            </Container>
        </Navbar>
    </div>
  )
}

export default Header;