import { Carousel, Col, Container, Image, Row } from "react-bootstrap"
import {FaMedal} from 'react-icons/fa'
import photo0 from '../assets/Martellago-Stemma.png'
import photo1 from '../assets/leon.png'
import photo2 from '../assets/emblema.png'


const SponsorAndPartner=()=>{

    return(
        <>
        <Container fluid className='mt-5 bg-success text-white'>
        <Container className=''>

            <Row className='py-5'>
                <Col className='display-6 text-start'>
                    <FaMedal className='me-4' />
                    I nostri partner sono:
                </Col>
            </Row>     

            <Row className='py-5 bg-white'>
                <Carousel variant='dark'>           
                    <Carousel.Item interval={3000}>
                            <Image src={photo0} className='img-fluid rounded' />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>      
                            <Image src={photo1} height={500} width={500} className='img-fluid rounded' />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>      
                            <Image src={photo2} height={500} width={411} className='img-fluid rounded' />
                    </Carousel.Item>
                </Carousel> 
            </Row> 

        </Container>
        </Container>
        </>
    )
}

export default SponsorAndPartner