import { Button, Carousel, Col, Container, Image, Placeholder, Row } from "react-bootstrap"
import { BsFillShieldLockFill } from 'react-icons/bs'


const RegisterAgain = () => {

    return (
        <>
            <Container fluid className='mt-5 pb-5 bg-register text-white'>
                <Container>
                    <Row className='py-5'>
                        <Col className='display-6 text-start'>
                            <BsFillShieldLockFill className='me-4' />
                            Accedi al nostro sito
                        </Col>
                    </Row>
                    <Row className='pt-3'>
                        <Col md={6} className='justify pb-3 mx-auto'>
                            <p className='mb-4'>Accedi con Google, è facile!</p>
                            <p>La sicurezza dei tuoi dati sarà garantita da Google e non dovrai ricordare nessuna password!</p>
                            <Button className="bg-black border border-white text-white w-100">Accedi con Google</Button>
                            <p className='mt-5 mb-4'>Accedi con la tua email.</p>
                            <p>Puoi accedere indicando la tua email e una password valida.</p>
                            <Button className="bg-black border border-white text-white w-100">Accedi con Email</Button>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default RegisterAgain