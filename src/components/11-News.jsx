import { Button, Card, Col, Container, Row } from "react-bootstrap"
import photo0 from '../assets/04cut.jpg'
import photo1 from '../assets/mainEvent0.jpg'
import photo2 from '../assets/02.jpg'
import {ImNewspaper} from 'react-icons/im'


const News=()=>{

    return(
        <>
        <Container className='mt-5 text-blue'>

            <Row className='mb-5'>
                <Col className='display-6 text-start'>
                    <ImNewspaper className='me-4' />
                    News
                </Col>
            </Row>  
            <Row>
                <Col md={4}>
                    <Card style={{ width: '18rem', height:'24rem' }} className='my-3 mx-auto'>
                        <Card.Img variant="top" src={photo0} />
                        <Card.Body>
                            <Card.Title>La Notte degli Indiani</Card.Title>
                            <Card.Text>
                            Serata di tradizioni indiane nella magia della valle di Elah
                            </Card.Text>
                            <Button variant="primary bg-danger">Leggi</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ width: '18rem', height:'24rem' }} className='my-3 mx-auto'>
                        <Card.Img variant="top" src={photo1} />
                        <Card.Body>
                            <Card.Title>Donazioni</Card.Title>
                            <Card.Text>
                            Online il nuovo canale solidale PayPal: leggi l'articolo e scopri come aiutarci
                            </Card.Text>
                            <Button variant="primary bg-danger">Leggi</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ width: '18rem', height:'24rem' }} className='my-3 mx-auto'>
                        <Card.Img variant="top" src={photo2} />
                        <Card.Body>
                            <Card.Title>Bilancio</Card.Title>
                            <Card.Text>
                            A maggio la pubblicazione del bilancio: leggi per scoprire come partecipare all'Assemblea dei Soci
                            </Card.Text>
                            <Button variant="primary bg-danger">Leggi</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
        </>
    )
}

export default News