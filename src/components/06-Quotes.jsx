import { Col, Container, Image, Row } from "react-bootstrap"
import photo0 from '../assets/indie.jpg'
import {BsChatQuoteFill} from 'react-icons/bs'


const Quotes=()=>{

    return(
        <>
        <Container fluid className='text-start bg-success text-white pb-5'>
            <Container className=''>
                <Row className='py-5'>
                    <Col className='display-6 text-start'>
                        <BsChatQuoteFill className='me-4' />
                        La citazione del giorno
                    </Col>
                </Row>
                <Row className=''>
                    <Col md={8} className='d-flex my-auto'>                        
                        <figure>
                        <blockquote class="blockquote">
                            <p>La terra non appartiene all’uomo, è l’uomo che appartiene alla terra.</p>
                        </blockquote>
                        <figcaption class="blockquote-footer py-3 ps-3 text-light">
                        Capriolo Zoppo, capo della tribù dei <cite title="Source Title">Dwamish</cite>
                        </figcaption>
                        </figure>
                    </Col>
                    <Col md={4} className=''>
                        <Image src={photo0} className='img-fluid rounded-circle img-thumbnail' />
                    </Col>
                </Row>
            </Container>
        </Container>
        </>
    )
}

export default Quotes