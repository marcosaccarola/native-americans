import { Col, Container, Image, Row } from "react-bootstrap"
import {ImStarFull} from 'react-icons/im'
import photo0 from '../assets/mainEvent0.jpg'
import photo1 from '../assets/mainEvent1.jpg'



const MainEvent=()=>{

    return(
        <>
        <Container className=''>
            <Row className='pt-5'>
                <Col><ImStarFull className='me-3' />Questa è la prossima attività dell'associazione:</Col>
            </Row>           
            <Row className='pt-5 px-3'>
                <Col md={8} className='justify'>
                    Il modo migliore per spiegare all'utente chi siamo è farlo attraverso delle attività.
                     Qui indicheremo l'evento principale dell'anno.
                     Se non abbiamo nessun avento in programma allora qui indicheremo un progetto,
                     una cosa che facciamo insieme e che è il motivo principale per il quale l'associazione esiste.
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