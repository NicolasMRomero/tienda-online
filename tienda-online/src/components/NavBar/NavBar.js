import Container  from 'react-bootstrap/Container'
import Nav  from 'react-bootstrap/Nav'
import Navbar  from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { CartWidget } from './CartWidget'

export const NavBar = () => {

    return (
            <Navbar bg="dark" variant="dark" className="me-auto">
                <Container>
                    <Nav className="me-auto">
                    <NavLink exact to="/"> 
                    <Image src="https://firebasestorage.googleapis.com/v0/b/tienda-online-e39a3.appspot.com/o/ONLINE-SHOP-LOGO.png?alt=media&token=2e18de10-b2a6-4a23-8222-64a194d96a2c"/>
                    </NavLink>
                    <NavLink activeClassName="activeLink" exact to="/">Home</NavLink>
                    <NavLink activeClassName="activeLink" exact to="/productos/Food">Food</NavLink>
                    <NavLink activeClassName="activeLink" exact to="/productos/Bazaar">Bazaar</NavLink>
                    <NavLink activeClassName="activeLink" exact to="/productos/Textile">Textile</NavLink>
                    <NavLink activeClassName="activeLink" exact to="/productos/Tools">Tools</NavLink>
                    <NavLink activeClassName="activeLink" exact to="/contact">Contact</NavLink>
                    <NavLink activeClassName="activeLink" exact to="/checkout">Checkout</NavLink>
                    <NavLink activeClassName="activeLink" exact to="/cart"><CartWidget/></NavLink>
                    </Nav>
                </Container>
            </Navbar>
    )
}
