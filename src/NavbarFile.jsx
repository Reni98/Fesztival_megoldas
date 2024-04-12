import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import star from '../src/star.svg'

function NavbarFile() {
  return (
    <Navbar expand="lg"  style={{backgroundColor:"#74B0FF"}}>
    <Container>
      <Navbar.Brand href="#home"><img src={star} alt=''></img>Festivals</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Főoldal</Nav.Link>
          <Nav.Link href="/fesztivalHozzaad">Fesztivál hozzáadása</Nav.Link>
          <Nav.Link href="/fesztivalKiir">Fesztivál adatok</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarFile