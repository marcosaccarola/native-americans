import { Container, Nav, Navbar } from "react-bootstrap"


const Bar=()=>{

    return(
        <>
        <Navbar bg="dark" variant="dark" className='' sticky="top">
                <Container>
                    <Navbar.Brand href="#home"><span className='display-5'>Logo</span></Navbar.Brand>
                    <Nav className=''>
                    <Nav.Link href="#eventi">Eventi</Nav.Link>
                    <Nav.Link href="#donazioni">Donazioni</Nav.Link>
                    <Nav.Link href='#accedi' className='text-primary'>Accedi</Nav.Link>
                    {/* <Nav.Link href="#registrati" className='text-danger'>Registrati</Nav.Link> */}
                    </Nav>
                </Container>
        </Navbar>
        </>
    )
}

export default Bar