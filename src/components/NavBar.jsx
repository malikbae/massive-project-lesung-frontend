import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar() {
  const navLinks = [
    {
      id: 1,
      path: "/",
      text: "BERANDA",
    },
    {
      id: 2,
      path: "pilih-jenjang",
      text: "PILIH JENJANG",
    },
    {
      id: 3,
      path: "pilih-program",
      text: "PILIH PROGRAM",
    },
    {
      id: 4,
      path: "testimoni",
      text: "TESTIMONI",
    },
  ];
  return (
    <>
      <Navbar expand="lg shadow-sm">
        <Container>
          <Navbar.Brand className="me-0" href="/">
            MaLes
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} to={link.path}>
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>
            <div className="text-center">
              <Button>LOGIN</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
