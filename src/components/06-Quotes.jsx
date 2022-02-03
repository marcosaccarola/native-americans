import { Col, Container, Image, Row } from "react-bootstrap"
import photo0 from '../assets/indie.jpg'
import {GiBarracksTent} from 'react-icons/gi'


const Quotes=()=>{

    return(
        <>
        <Container fluid className='py-5 text-start bg-success text-white'>
            <Container className='py-3'>
                <Row className='pt-5'>
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
                        <Image src={photo0} className='img-fluid rounded-circle img-thumbnail mb-3' />
                    </Col>
                </Row>
            </Container>
        </Container>
        </>
    )
}

export default Quotes