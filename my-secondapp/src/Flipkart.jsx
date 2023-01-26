import React from 'react'
import { Button, Card, CardGroup, Carousel, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './Flipkart.css'
import { FaShoppingCart } from 'react-icons/fa' 

function Flipkart() {
  return (
    <div>
    <div className='navsbar'>
    <Navbar bg="primary" expand="lg" style={{paddingLeft:'130px',height:'81px'}}>
      <Container fluid>
        <Navbar.Brand href="#"> <img
        src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" 
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
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Form className="d-flex">
          <div style={{marginLeft:'15px'}}>
            <Form.Control
              type="search"
              placeholder="Search for products, brands and more"
              className="me-2"
              aria-label="Search" style={{borderRadius:'0',width:'550px',fontFamily:'sans-serif',fontSize:'16px'}}
            />
            </div>
          </Form>
          <Button variant="light" className='button' >Login</Button>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' ,marginLeft:'120px'}}
            navbarScroll
          >
         
            <Nav.Link href="#action1" className='links' >Become a Seller</Nav.Link>
            
            <NavDropdown title="Link"  id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="#" className='links' >
            <FaShoppingCart className='ic'/> Cart
            </Nav.Link>
           
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
    <div className='second-bar'>
      <div className='g-link'>
      <a href='#'>
      <div className='g-image'>
      <img src='https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100' height='50'/>
      </div>
      <div className='grocery'>
      Grocery
      </div>
      </a>
      </div>
      <div className='g-link'>
      <a href='#'>
      <div className='g-image'>
      <img src='https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100' height='50'/>
      </div>
      <div className='grocery'>
      Mobiles
      </div>
      </a>
      </div>
      <div className='g-link'>
      <a href='#'>
      <div className='g-image'>
      <img src='https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100' height='50'/>
      </div>
      <div className='grocery'>
      Fashion
      </div>
      </a>
      </div>
      <div className='g-link'>
      <a href='#'>
      <div className='g-image'>
      <img src='https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' height='50'/>
      </div>
      <div className='grocery'>
      Electronics
      </div>
      </a>
      </div>
      <div className='g-link'>
      <a href='#'>
      <div className='g-image'>
      <img src='https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100' height='50'/>
      </div>
      <div className='grocery'>
      Home
      </div>
      </a>
      </div>
      <div className='g-link'>
      <a href='#'>
      <div className='g-image'>
      <img src='https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100' height='50'/>
      </div>
      <div className='grocery'>
      Appliances
      </div>
      </a>
      </div>
      <div className='g-link'>
      <a href='#'>
      <div className='g-image'>
      <img src='https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100' height='50'/>
      </div>
      <div className='grocery'>
      Travel
      </div>
      </a>
      </div>
      <div className='g-link'>
      <a href='#'>
      <div className='g-image'>
      <img src='https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100' height='50'/>
      </div>
      <div className='grocery'>
     Top Offers
      </div>
      </a>
      </div>
      <div className='g-link'>
      <a href='#'>
      <div className='g-image'>
      <img src='https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100' height='50'/>
      </div>
      <div className='grocery'>
      Beauty, Toys & More
      </div>
      </a>
      </div>
      <div className='g-link'>
      <a href='#'>
      <div className='g-image'>
      <img src='https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100' height='50'/>
      </div>
      <div className='grocery'>
      Two Wheelers
      </div>
      </a>
      </div>
      </div>
      
      <div className='carousel' style={{paddingTop:'10px'}}>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dog55574plkkx.cloudfront.net/images/flipkart-big-billion-days-offer.jpg"
          alt="First slide"
          height='350'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.indiadesire.com/content/Flipkart%20BBD%20TVs%20Large%20Appliances%20Offers.jpg"
          alt="Second slide"
          height='350'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hotdealszone.in/wp-content/uploads/2020/10/Flipkart-big-billion-days-offers-on-Cameras-1024x318.jpg"
          alt="Third slide"
          height='350'
        />
      </Carousel.Item>
    </Carousel>
      
      </div>

      <div>
      <CardGroup>
      <div className='crd'>
      <div style={{width:'180px' ,height:'230px'}}>
      <Card >
      <Card.Img src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90" alt="Card image" width='100%' height='230px'/>
      <Card.ImgOverlay>
      <center>
        <Card.Title>Electronics Items</Card.Title>
        <Button variant="primary">View All</Button>
        </center> 
      </Card.ImgOverlay>
      </Card>
      </div>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      </div>
    </CardGroup>
      </div>

    </div>

  )
}

export default Flipkart