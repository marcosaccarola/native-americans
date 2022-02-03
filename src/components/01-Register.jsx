import { Container, Image } from "react-bootstrap"
import photo from '../assets/header-lg.jpg'


const Register=()=>{

    return(
        <>
        <Container fluid className='px-0'>
            <Image src={photo} className='img-fluid' />
        </Container>
        </>
    )
}

export default Register