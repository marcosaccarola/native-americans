import { Container, Nav, Navbar } from "react-bootstrap"


const Bar=()=>{

    return(
        <>
        <Navbar bg="dark" variant="dark" className='' sticky="top">
                <Container>
                    <Navbar.Brand href="#home"><span className='display-5'>Logo</span></Navbar.Brand>
                    <Nav className=''>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#eventi">Eventi</Nav.Link>
                    <Nav.Link href="#donazioni">Donazioni</Nav.Link>
                    <Nav.Link href="#partner">Partner</Nav.Link>
                    <Nav.Link href="#contatti">Contatti</Nav.Link>
                    <Nav.Link href="#registrati" className='text-danger'>Registrati</Nav.Link>
                    </Nav>
                </Container>
        </Navbar>
        </>
    )
}

export default Bar