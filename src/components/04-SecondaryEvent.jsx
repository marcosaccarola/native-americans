import { Button, Col, Container, Image, Row } from "react-bootstrap"
import {GiBarracksTent} from 'react-icons/gi'
import photo0 from '../assets/mainEvent0.jpg'
import photo1 from '../assets/mainEvent1.jpg'


const SecondaryEvent=()=>{

    return(
        <>
        <Container className=''>
            <Row className='pt-5'>
                <Col className='display-6 text-start'>
                    <GiBarracksTent className='me-4' />
                    Vieni a visitare il nostro tipì!
                </Col>
            </Row>           
            <Row className='pt-5'>
                <Col md={8} className='justify pb-3'>
                    <p>
                    Qui c'è un'altra attività che facciamo durante l'anno.
                    Questa è meno importante della precedente oppure è un'attività continuativa, per esempio un'esposizione di foto oppure una piccola biblioteca.
                    </p>
                    <p>
                    Ci sono due bottoni perché se l'utente ha letto fin a qui allora magari potrebbe essergli venuta voglia di mettersi in contatto con noi.
                    </p>
                    <Button variant="dark my-3 me-3">Informazioni</Button>
                    <Button variant="dark my-3">Scrivici</Button>
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

export default SecondaryEvent