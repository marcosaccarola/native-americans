import { Container, Image } from "react-bootstrap"
import photo from '../assets/header-lg.jpg'


const Cover=()=>{

    return(
        <>
        <Container fluid className='px-0'>
            <Image src={photo} className='img-fluid' />
        </Container>
        </>
    )
}

export default Cover