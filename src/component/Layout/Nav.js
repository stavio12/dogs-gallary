import Link from "next/link";
import { Nav, NavLink, Navbar, NavbarBrand } from "react-bootstrap";

const Navigate = () => (
  <header>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <img src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2020/01/Best-Dog-Logos-and-How-to-Make-Your-Own-for-Free-image3.jpg" alt="" />{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            {" "}
            <Link href="/">Random Dogs </Link>
          </Nav.Link>{" "}
          <Nav.Link>
            <Link href="/Havanese">Havanese Dogs </Link>
          </Nav.Link>{" "}
          <Nav.Link>
            {" "}
            <Link href="/German">Germanshepherd Dogs </Link>
          </Nav.Link>{" "}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
);

export default Navigate;
