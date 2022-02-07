import { Container, Nav, Navbar } from "react-bootstrap"


const Bar=()=>{

    document.addEventListener("DOMContentLoaded", function(){

        const el_autohide = document.querySelector('.autohide');
        
        // add padding-top to bady (if necessary)
        // const navbar_height = document.querySelector('.navbar').offsetHeight;
        // document.body.style.paddingTop = navbar_height + 'px';
      
        if(el_autohide){
          var last_scroll_top = 0;
          window.addEventListener('scroll', function() {
                let scroll_top = window.scrollY;
               if(scroll_top < last_scroll_top) {
                    el_autohide.classList.remove('scrolled-down');
                    el_autohide.classList.add('scrolled-up');
                }
                else {
                    el_autohide.classList.remove('scrolled-up');
                    el_autohide.classList.add('scrolled-down');
                }
                last_scroll_top = scroll_top;
          }); 
          // window.addEventListener
        }
        // if
      
      }); 
    

    return(
        <>
        <Navbar bg="dark" variant="dark" className='autohide' sticky="top">
                <Container>
                    <Navbar.Brand href="#home"><span className='display-5'>Logo</span></Navbar.Brand>
                    <Nav className=''>
                    <Nav.Link href="#eventi">Eventi</Nav.Link>
                    <Nav.Link href="#donazioni">Donazioni</Nav.Link>
                    <Nav.Link href='#accedi' className='text-primary'>Accedi</Nav.Link>
                    </Nav>
                </Container>
        </Navbar>
        </>
    )
}

export default Bar