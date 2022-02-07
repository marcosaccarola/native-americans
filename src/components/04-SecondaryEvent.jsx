import { Button, Col, Container, Image, Placeholder, Row } from "react-bootstrap"
import {GiBarracksTent} from 'react-icons/gi'
import photo0 from '../assets/00.jpg'
import photo1 from '../assets/06.jpg'


const SecondaryEvent=()=>{

    return(
        <>
        <Container className='text-blue'>

            <Row className='pt-5'>
                <Col className='display-6 text-start'>
                    <GiBarracksTent className='me-4' />
                    Rendi omaggio al nostro totem
                </Col>
            </Row>           
            <Row className='pt-5'>
                <Col md={8} className='justify pb-3'>
                    <p>
                    Questa è un'altra attività dell'associazione, oppure un evento.
                    </p>
                    <p>
                    In questo esempio di layout ogni sezione è fatta da: titolo, testo, bottone e immagini.
                    Sono gli strumenti minimi, ma è possibile aggiungerne altri.
                    </p>
                    <p>
                    Qui ci sono due bottoni perché se l'utente ha letto fin a qui allora magari ha voglia di scriverci.
                    </p>
                    <p>
                    <Placeholder xs={12} />
                    <Placeholder xs={12} />
                    <Placeholder xs={4} />
                    </p>
                    <p>
                    <Placeholder xs={2} />
                    </p>
                    <Button variant="dark bg-danger my-3 me-3">Informazioni</Button>
                    <Button variant="dark bg-danger my-3">Scrivici</Button>
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