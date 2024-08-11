import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="mb-3">
      <Container>
        <Navbar.Brand>HealthyLife</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
