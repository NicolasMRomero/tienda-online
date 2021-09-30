import React from 'react'
import Container  from 'react-bootstrap/Container'
import Nav  from 'react-bootstrap/Nav'
import Navbar  from 'react-bootstrap/Navbar'

export const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#">Tienda online</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#">Categoría 1</Nav.Link>
            <Nav.Link href="#">Categoría 2</Nav.Link>
            <Nav.Link href="#">Categoría 3</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </div>
    )
}
