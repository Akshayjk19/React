import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Main() {
  return (
    <div>
    <Navbar bg="primary" expand="lg" style={{paddingLeft:'130px',height:'81px'}}>
    <Container fluid>
      <Navbar.Brand href="#"> <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVq5I-ZyCxGGkK-6tWMu3uJOCXzus9hYXvow&usqp=CAU" 
      height='20'
      width='80'
      className="d-inline-block align-top"
      alt="flipkrt"
      style={{marginTop:'20px'}}
    />
    <br/>
    <div style={{fontSize:'12px',fontStyle:'italic',marginBottom:'20px',color:'white'}}>Explore
    <span className='pl' style={{color:'yellow',fontWeight:'bold'}}> Plus 
    <img
    src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" 
    height='10'
    alt="plus"
  />
  </span>
  </div>
  </Navbar.Brand>
    
    </Container>
  </Navbar>
  
    
    </div>
  )
}

export default Main