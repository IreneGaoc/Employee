import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
      <>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="/">Employees</Navbar.Brand>
          </Container>
        </Navbar>
      </>
    );
  }
  
export default Header
