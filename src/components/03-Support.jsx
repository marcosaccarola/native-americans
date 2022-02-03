import { Button, Col, Container, Image, Row } from "react-bootstrap"
import {RiHandCoinLine} from 'react-icons/ri'
import photo0 from '../assets/mainEvent0.jpg'


const Support=()=>{

    return(
        <>
        <Container fluid className='mt-5 bg-danger text-white'>
        <Container>
            <Row className='pt-5'>
                    <Col className='display-6 text-start'>
                        <RiHandCoinLine className='me-4' />
                        Abbiamo bisogno del tuo supporto.
                    </Col>
                </Row>           
                <Row className='pt-5'>
                    <Col md={4} md={{order:'first'}} xs={{order:'last'}}>
                        <Image src={photo0} className='img-fluid rounded mb-3' />
                    </Col>
                    <Col md={8} className='justify pb-3'>
                        <p>
                        Come hai notato, qui lo sfondo diventa rosso perché questa è una sezione importante.
                        </p>
                        <p>
                        La prima cosa che vogliamo l'abbiamo scritta sopra: registrati a questo sito e segui le nostre attività.
                        La seconda cosa a cui teniamo sono le donazioni, perché con più donazioni potremmo svolgere attività migliori e rivolte a un pubblico più vasto.
                        </p>
                        <p>
                        A sinistra c'è una foto perché questo semplifica la lettura sugli schermi molto grandi.
                        Nella versione per cellulare, la foto appare sempre dopo il testo.
                        Anche in questo caso mettiamo un bel bottone, perché ci piacciono le cose semplici.
                        </p>
                        <Button variant="success my-3">Sostienici</Button>
                    </Col>
                </Row>  
        </Container>
        </Container>
        </>
    )
}

export default Support