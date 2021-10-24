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
                        <NavLink activeClassName="activeLink" exact to="/">Inicio</NavLink>
                        <NavLink activeClassName="activeLink" exact to="/productos/Alimentos">Alimentos</NavLink>
                        <NavLink activeClassName="activeLink" exact to="/productos/Bazar">Bazar</NavLink>
                        <NavLink activeClassName="activeLink" exact to="/productos/Textil">Textil</NavLink>
                        <NavLink activeClassName="activeLink" exact to="/productos/Electro">Electro</NavLink>
                        <NavLink activeClassName="activeLink" exact to="/contacto">Contacto</NavLink>
                        <NavLink activeClassName="activeLink" exact to="/cart"><CartWidget/></NavLink>
                    </Nav>
                </Container>
            </Navbar>
    )
}
