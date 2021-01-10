import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";

const TopNavigation = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="mb-4"
    >
      <Container>
        <Link href="/">
          <Navbar.Brand href="/">I Love Books</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link href="/">
              <Nav.Link href="/">Home</Nav.Link>
            </Link>
            <Link href="/about">
              <Nav.Link href="/about">About</Nav.Link>
            </Link>
            <Link href="/contact">
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavigation;
