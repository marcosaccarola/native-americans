import { Container, Placeholder } from "react-bootstrap"
import {MdAlternateEmail} from 'react-icons/md'
import {BsLinkedin,BsGithub} from 'react-icons/bs'


const Footer=()=>{

    return(
        <>
        <Container fluid className='text-start py-5'>
            <Container className='py-3'>
                <p>
                <Placeholder xs={4} />
                </p>
                <p>
                <Placeholder xs={7} />
                </p>
                <p>
                <Placeholder xs={2} />
                </p>
                <p>
                <Placeholder xs={4} />
                </p>
                <p>
                <Placeholder xs={7} />
                </p>
                <p>
                <Placeholder xs={2} />
                </p>
            </Container>
        </Container>
        <Container fluid className='bg-dark text-white d-flex align-items-end'>
            <Container className='d-flex w-75 mx-auto justify-content-end px-0 py-3'>
                <MdAlternateEmail className='me-3' size={25} onClick={()=>window.open('mailto:marco.saccarola.dev@gmail.com')} />
                <BsLinkedin className='me-3' size={25} onClick={()=>window.open('https://www.linkedin.com/in/marcosaccarola/')} />
                <BsGithub className='' size={25} onClick={()=>window.open('https://github.com/marcosaccarola')} />
            </Container>
        </Container>
        </>
    )
}

export default Footer