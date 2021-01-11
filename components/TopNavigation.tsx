import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";
import style from "../scss/TopNavigation.module.scss";

const TopNavigation = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className={`${style.container} border-0`}
    >
      <Container>
        <Link href="/">
          <Navbar.Brand className="border-0" href="/">
            I Love Books
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link href="/">
              <Nav.Link className="border-0" href="/">
                Home
              </Nav.Link>
            </Link>
            <Link href="/about">
              <Nav.Link className="border-0" href="/about">
                About
              </Nav.Link>
            </Link>
            <Link href="/contact">
              <Nav.Link className="border-0" href="/contact">
                Contact
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavigation;
