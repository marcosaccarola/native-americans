import { Col, Container, Image, Row } from "react-bootstrap"
import {ImProfile} from 'react-icons/im'
import presidente from '../assets/presidente.jpg'
import vicepresidente from '../assets/vice.jpg'
import segretario from '../assets/segretario.jpg'



const People=()=>{

    return(
        <>
        <Container>
            <Row className='pt-5'>
                <Col className='display-6 text-start'>
                    <ImProfile className='me-4' />
                    Chi siamo
                </Col>
            </Row> 
            <Row className='pt-5'>
                <Col md={4} className=''>
                    <Image src={presidente} width={200} className='rounded-circle img-fluid'/>
                    <h6>Presidente</h6>
                    <p className='text-muted'>Nome e cognome</p>
                </Col>
                <Col md={4} className=''>
                    <Image src={vicepresidente} width={200} className='rounded-circle img-fluid'/>
                    <h6>Vicepresidente</h6>
                    <p className='text-muted'>Nome e cognome</p>
                </Col>
                <Col md={4} className=''>
                    <Image src={segretario} width={200} className='rounded-circle img-fluid'/>
                    <h6>Segretario</h6>
                    <p className='text-muted'>Nome e cognome</p>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default People