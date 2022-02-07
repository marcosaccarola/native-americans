import { Button, Col, Container, Image, Placeholder, Row } from "react-bootstrap"
import {IoMdMail} from 'react-icons/io'
import photo0 from '../assets/07.jpg'


const Contacts=()=>{

    return(
        <>
        <Container fluid className='mt-5 bg-danger text-white'>
        <Container>
            <Row className='pt-5'>
                <Col className='display-6 text-start'>
                    <IoMdMail className='me-4' />
                    Facci sapere la tua opinione
                </Col>
            </Row>           
            <Row className='py-5'>
                <Col md={4} md={{order:'first'}} xs={{order:'last'}}>
                    <Image src={photo0} className='img-fluid rounded mb-3' />
                </Col>
                <Col md={8} className='justify pb-3'>
                    <p>
                    <Placeholder xs={12} />
                    <Placeholder xs={10} />
                    </p>
                    <p>
                    Premi il tasto verde qui sotto per inviare una email immediata.
                    </p>
                    <Button variant="light text-blue my-3">Scrivici</Button>
                </Col>
            </Row>  
        </Container>
        </Container>
        </>
    )
}

export default Contacts