import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md">
       <Navbar.Brand>
        <Button variant="secondary" as={Link} to="/">
          Home
        </Button>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Button variant="primary" as={Link} to="/transactions">
              Transaction List
            </Button>
          </Nav.Link>
          <Nav.Link>
            <Button variant="primary" as={Link} to="/transactions/new">
              New Transaction
            </Button>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>
            <Button variant="primary" href="#login">
              Login
            </Button>
          </Nav.Link>
          <Nav.Link>
            <Button variant="outline-secondary" href="#signup">
              Sign up
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
