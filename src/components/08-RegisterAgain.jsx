import { Button, Carousel, Col, Container, Image, Placeholder, Row } from "react-bootstrap"
import {FaMedal} from 'react-icons/fa'


const RegisterAgain=()=>{

    return(
        <>
        <Container fluid className='mt-5 pb-5 bg-success text-white'>
            <Container>
            <Row className='py-5'>
                <Col className='display-6 text-start'>
                    <FaMedal className='me-4' />
                    Iscriviti al sito
                </Col>
            </Row>
            <Row className='pt-3'>
                <Col md={12} className='justify pb-3 w-50 mx-auto'>
                    <p>Iscriviti con Google, è facile!</p>
                    <p>La sicurezza dei tuoi dati sarà garantita da Google e non dovrai ricordare nessuna password!</p>
                    <Button variant="black border border-white text-white w-100">Accedi con Google</Button>
                    <p className='mt-5'>Iscriviti con email.</p>
                    <p>Puoi iscriverti indicando la tua email e una password valida.</p>
                    <Button variant="black border border-white text-white w-100">Iscriviti con Email</Button>
                </Col>
            </Row>     
            </Container>
        </Container>
        </>
    )
}

export default RegisterAgain