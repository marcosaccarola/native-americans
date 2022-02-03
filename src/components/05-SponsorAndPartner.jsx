import { Carousel, Col, Container, Image, Row } from "react-bootstrap"
import {FaMedal} from 'react-icons/fa'
import photo0 from '../assets/Martellago-Stemma.png'
// import photo1 from '../assets/leon.png'
import photo2 from '../assets/emblema.png'


const SponsorAndPartner=()=>{
    
    return(
        <>
        <Container fluid className='mt-5 bg-success text-white'>
            <Row className='py-5'>
                <Col className='display-6 text-start'>
                    <FaMedal className='me-4' />
                    I nostri partner sono:
                </Col>
            </Row>     
        </Container>
        <Container fluid className=''>


            <Row className='py-3 bg-white'>
                <Carousel variant='dark'>           
                    <Carousel.Item interval={3000}>
                            <Image src={photo0} width={230} className='img-fluid rounded mx-5 my-3' />
                            <Image src={photo2} width={250}className='img-fluid rounded' />
                            {/* <Image src={photo2} height={300} width={411} className='img-fluid rounded' /> */}
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>      
                            <Image src={photo2} width={250} className='mx-5 my-3 img-fluid rounded' />
                            <Image src={photo0} width={230} className='img-fluid rounded' />
                    </Carousel.Item>
                </Carousel> 
            </Row> 

        </Container>
        </>
    )
}

export default SponsorAndPartner