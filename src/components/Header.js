import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>React Star Wars App</Navbar.Brand>
                    </LinkContainer>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;