import { Button, Col, Container, Image, Placeholder, Row } from "react-bootstrap"
import {ImStarFull} from 'react-icons/im'
import photo0 from '../assets/mainEvent0.jpg'
import photo1 from '../assets/mainEvent1.jpg'



const MainEvent=()=>{

    return(
        <>
        <Container className=''>
            <Row className='pt-5'>
                <Col className='display-6 text-start'>
                    <ImStarFull className='me-4' />
                    Questa è la prossima attività:
                </Col>
            </Row>           
            <Row className='pt-5'>
                <Col md={8} className='justify pb-3'>
                    <p>
                    Ciao sono Marco e questa è un <a href=''>esempio di layout</a>. I colori, i testi, le foto, i font, è meglio vederli con calma.
                    </p>
                    <p>
                    La prima cosa che ci interessa è il layout: in che modo sono disposte le sezioni e cosa contengono.
                    </p>
                    <p>
                    Questa prima sezione potrebbe contenere l'attività principale dell'associazione, per mostrare subito di cosa vi state occupando.
                    </p>
                    <p>
                    <Placeholder xs={12} />
                    <Placeholder xs={12} />
                    <Placeholder xs={10} />
                    </p>
                    <p>
                    <Placeholder xs={12} />
                    <Placeholder xs={7} />
                    </p>
                    <Button variant="dark my-3">Informazioni</Button>
                </Col>
                <Col md={4}>
                    <Image src={photo0} className='img-fluid rounded mb-3' />
                    <Image src={photo1} className='img-fluid rounded' />
                </Col>
            </Row>           
        </Container>
        </>
    )
}

export default MainEvent