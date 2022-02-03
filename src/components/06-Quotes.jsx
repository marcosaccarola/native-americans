import { Container } from "react-bootstrap"


const Quotes=()=>{

    return(
        <>
        <Container className='mt-5 text-start'>
            <figure>
            <blockquote class="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
            </figcaption>
            </figure>
        </Container>
        </>
    )
}

export default Quotes