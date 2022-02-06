import { Button, Col, Container, Image, Placeholder, Row } from "react-bootstrap"
import {RiHandCoinLine} from 'react-icons/ri'
import photo0 from '../assets/mainEvent0.jpg'


const Support=()=>{

    return(
        <>
        <Container fluid className='mt-5 bg-danger text-white' id='donazioni'>
        <Container>
            <Row className='pt-5'>
                <Col className='display-6 text-start'>
                    <RiHandCoinLine className='me-4' />
                    Abbiamo bisogno del tuo supporto.
                </Col>
            </Row>           
            <Row className='py-5'>
                <Col md={4} md={{order:'first'}} xs={{order:'last'}}>
                    <Image src={photo0} className='img-fluid rounded mb-3' />
                </Col>
                <Col md={8} className='justify pb-3'>
                    <p>
                    Come hai notato, le sezioni più importanti hanno un colore più acceso.
                    </p>
                    <p>
                    In questo esempio di layout, dopo le presentazioni, spieghiamo che è possibile fare delle donazioni.
                    </p>
                    <p>
                    <Placeholder xs={12} />
                    <Placeholder xs={10} />
                    </p>
                    <Button variant="light text-blue my-3">Sostienici</Button>
                </Col>
            </Row>  
        </Container>
        </Container>
        </>
    )
}

export default Support