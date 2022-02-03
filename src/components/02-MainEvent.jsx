import { Col, Container, Image, Row } from "react-bootstrap"
import {ImStarFull} from 'react-icons/im'
import photo0 from '../assets/mainEvent0.jpg'
import photo1 from '../assets/mainEvent1.jpg'



const MainEvent=()=>{

    return(
        <>
        <Container className=''>
            <Row className='pt-5'>
                <Col className='display-6 text-start'>
                    <ImStarFull className='me-3' />
                    Questa è la prossima attività:
                </Col>
            </Row>           
            <Row className='pt-5'>
                <Col md={8} className='justify'>
                    <p>
                    Il modo migliore per spiegare all'utente chi siamo è farlo attraverso delle attività.
                     Qui indicheremo l'evento principale dell'anno.
                     Se non abbiamo nessun avento in programma allora qui indicheremo un progetto,
                     una cosa che facciamo insieme e che è il motivo principale per il quale l'associazione esiste.
                    </p>
                    <p>
                    A destra ci mettiamo anche due foto, che però nella versione per telefono cellulare le ho messe subito sotto a questo testo.
                    </p>
                    <p>
                    Metto un bottone che invita l'utente a fare qualcosa, perché è importante che gli utenti facciano cose,
                     quando entrano in un sito tipo il nostro.
                    </p>
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