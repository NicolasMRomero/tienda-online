import Container  from 'react-bootstrap/Container'
import Nav  from 'react-bootstrap/Nav'
import Navbar  from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { CartWidget } from './CartWidget'

export const NavBar = () => {
    return (
            <Navbar bg="dark" variant="dark" className="me-auto">
                <Container>
                    <Nav className="me-auto">
                    <NavLink exact to="/"> <Navbar.Brand>Tienda online</Navbar.Brand></NavLink>
                        <NavLink activeClassName="activeLink" exact to="/">Home</NavLink>
                        <NavLink activeClassName="activeLink" exact to="/productos/Food">Food</NavLink>
                        <NavLink activeClassName="activeLink" exact to="/productos/Bazaar">Bazaar</NavLink>
                        <NavLink activeClassName="activeLink" exact to="/productos/Textile">Textile</NavLink>
                        <NavLink activeClassName="activeLink" exact to="/productos/Tools">Tools</NavLink>
                        <NavLink activeClassName="activeLink" exact to="/contact">Contact</NavLink>
                        <NavLink activeClassName="activeLink" exact to="/cart"><CartWidget/></NavLink>
                    </Nav>
                </Container>
            </Navbar>
    )
}
