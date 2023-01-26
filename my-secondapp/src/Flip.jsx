import React from 'react'
import {  Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './Flipkart.css';
import { HiShoppingCart } from 'react-icons/hi' 
function Flipkart() {
  return (
    <div>
    <Navbar bg="primary" variant="dark" style={{height:'61px', paddingLeft:'140px'}}>
        <Container fluid>
        
          <Navbar.Brand href="#home">
          <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" 
              height='20'
              width='80'
              className="d-inline-block align-top"
              alt="flipkrt"
              style={{marginTop:'20px'}}
            /><br/><div style={{fontSize:'12px',fontStyle:'italic',marginBottom:'20px'}}>Explore
            <span className='pl'> Plus <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" 
            height='10'
            alt="plus"
          /></span>
          </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Form className="d-flex">
          <div style={{marginLeft:'15px'}}>
            <Form.Control
              type="search"
              placeholder="Search for products, brands and more"
              className="me-2"
              aria-label="Search"
            />
            </div>
          </Form>

          <Button variant="light" className='login'><a href='#' style={{textDecoration:'none',textAlign:'center'}}>Login</a></Button>
          <div className='links'>
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{color:'white'}}>Become A Seller</Nav.Link>
            <NavDropdown title="More"  id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          
            <Nav.Link href="#pricing" style={{color:'white'}}>
            <HiShoppingCart />Cart</Nav.Link>
           
          </Nav>
          </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='second-bar'>
      <div className='g-link'>
      <a href='#'>
      <div className='g-image'>
      <img src='https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100' />
      </div>
      <div className='grocery'>
      Grocery
      </div>
      </a>
      </div>
      </div>

    </div>
  )
}

export default Flipkart