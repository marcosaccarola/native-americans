import { Button, Carousel, Col, Container, Image, Placeholder, Row } from "react-bootstrap"
import {FaMedal} from 'react-icons/fa'
import photo0 from '../assets/Martellago-Stemma.png'
// import photo1 from '../assets/leon.png'
import photo1 from '../assets/emblema.png'


const SponsorAndPartner=()=>{
    
    return(
        <>
        <Container fluid className='mt-5 bg-danger text-white'>
            <Container>
            <Row className='py-5'>
                <Col className='display-6 text-start'>
                    <FaMedal className='me-4' />
                    I nostri partner
                </Col>
            </Row>
            <Row className='pt-3'>
                <Col md={4}>
                    {/* <Image src={photo0} className='img-fluid rounded mb-3' /> */}
                    <Image src={photo1} className='img-fluid rounded mb-5 img-partner' />
                </Col>
                <Col md={8} className='justify pb-3'>
                        <p>
                        <Placeholder xs={6} size='lg' className='bg-secondary' />
                        </p>
                        <p>
                        Se provi a stringere lo schermo, scoprirai che le immagini su cellulare appaiono prima oppure dopo il testo, mentre su computer appaiono ai lati.
                        </p>
                        <p>
                        <Placeholder xs={12} />
                        <Placeholder xs={12} />
                        <Placeholder xs={4} />
                        </p>
                        <p>
                        <Placeholder xs={12} />
                        <Placeholder xs={12} />
                        <Placeholder xs={10} />
                        </p>
                        <p>
                        <Placeholder xs={2} />
                        </p>
                        <Button variant="light text-blue my-3 mx-auto">Informazioni</Button>
                </Col>
            </Row>     
            </Container>
        </Container>

        {/*<Container fluid className=''>
            <Row className='py-3'>
                 <Carousel variant='dark'>           
                    <Carousel.Item interval={3000}>

                    </Carousel.Item>
                    <Carousel.Item interval={3000}>      

                    </Carousel.Item>
                     <Carousel.Item interval={3000}>
                            <Image src={photo0} width={115} className='img-fluid rounded mx-5 my-3' />
                            <Image src={photo2} width={125}className='img-fluid rounded' />
                            <Image src={photo0} width={115} className='img-fluid rounded mx-5 my-3' />
                            <Image src={photo2} width={125}className='img-fluid rounded' />
                            <Image src={photo0} width={115} className='img-fluid rounded mx-5 my-3' />
                            <Image src={photo2} width={125}className='img-fluid rounded' />
                            {/* <Image src={photo2} height={300} width={411} className='img-fluid rounded' />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>      
                            <Image src={photo2} width={125} className='mx-5 my-3 img-fluid rounded' />
                            <Image src={photo0} width={115} className='img-fluid rounded' />
                            <Image src={photo2} width={125} className='mx-5 my-3 img-fluid rounded' />
                            <Image src={photo0} width={115} className='img-fluid rounded' />
                            <Image src={photo2} width={125} className='mx-5 my-3 img-fluid rounded' />
                            <Image src={photo0} width={115} className='img-fluid rounded' />
                    </Carousel.Item> 
                </Carousel> 
            </Row> 
        </Container>*/}
        </>
    )
}

export default SponsorAndPartner