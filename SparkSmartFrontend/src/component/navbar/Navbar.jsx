import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function NavbarComponent({logoutHandler}) {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/"  >

        <Navbar.Brand  >Spark Smart</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#featured">Featured</Nav.Link>
            <Nav.Link href="#category">Category</Nav.Link>
            <Nav.Link href="#contactus">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse>
          <Nav style={{ flexDirection: "row" }}>
            <Link to="/cart" > 
            <Nav.Item style={{ padding: "8px" }} >
              <FontAwesomeIcon
                style={{ fontSize: "x-large" }}
                icon={faCartShopping}
                />
            </Nav.Item>
            </Link>

            <NavDropdown
              title={
                <FontAwesomeIcon
                  style={{ fontSize: "x-large" }}
                  icon={faUser}
                />
              }
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item >Action</NavDropdown.Item>
              <NavDropdown.Item >
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item >Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logoutHandler} >
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
