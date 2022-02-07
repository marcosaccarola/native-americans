import { Col, Container, Image, Row } from "react-bootstrap"
import photo0 from '../assets/indie.jpg'
import {BsChatQuoteFill} from 'react-icons/bs'


const Quotes=()=>{

    return(
        <>
        <Container fluid className='mt-5 text-start bg-danger text-white pb-5'>
            <Container className=''>
                <Row className='pt-5'>
                    <Col md={8} className='d-flex flex-column justify-content-between' >                        
                        
                        <span className='display-6 mb-5'><BsChatQuoteFill className='me-4 text-white' />La citazione del giorno</span>

                        <figure className=''>
                        <blockquote class="blockquote">
                            <p>La terra non appartiene all’uomo, è l’uomo che appartiene alla terra.</p>
                        </blockquote>
                        <figcaption class="blockquote-footer py-3 ps-3 text-light">
                        Capriolo Zoppo, capo della tribù dei <cite title="Source Title">Dwamish</cite>
                        </figcaption>
                        </figure>

                        <div></div>

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