import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavUI() {
  return (
    <div>
    <Navbar style={{backgroundColor:'#00bfff', color:'#fff'}} expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand href="/" style={{color:'#fff'}}><h1 >Cheenu</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{color:'#fff'}}><h4>Home</h4></Nav.Link>
            <Nav.Link href="about" style={{color:'#fff'}}><h4>About</h4></Nav.Link>
            <Nav.Link href="contact" style={{color:'#fff'}}><h4>Contact</h4></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavUI;