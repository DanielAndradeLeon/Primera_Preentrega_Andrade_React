import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../NavBar/NavBar.css';
import logo from '../img/logo.svg';
import CartWidget from './CartWidget/CartWidget.js';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <img className="logo" src={logo} alt="logoAldan" />
        <Navbar.Brand href="#home">
            <h1>Aldan Store</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#categorias">Categorias</Nav.Link>
            <Nav.Link href="#precio">Precio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
    </Navbar>
  );
}

export default NavBar