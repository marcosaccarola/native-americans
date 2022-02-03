import { Container, Nav, Navbar } from "react-bootstrap"


const Bar=()=>{

    return(
        <>
        <Navbar bg="dark" variant="dark" className=''>
                <Container>
                    <Navbar.Brand href="#home"><span className='display-1'>Logo</span></Navbar.Brand>
                    <Nav className=''>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Eventi</Nav.Link>
                    <Nav.Link href="#pricing">Donazioni</Nav.Link>
                    <Nav.Link href="#pricing">Partner</Nav.Link>
                    <Nav.Link href="#pricing">Contatti</Nav.Link>
                    <Nav.Link href="#pricing" className='text-danger'>Registrati</Nav.Link>
                    </Nav>
                </Container>
        </Navbar>
        </>
    )
}

export default Bar