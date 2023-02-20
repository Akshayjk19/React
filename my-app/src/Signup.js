import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'

const Signup = () =>{
  return (
    <div>
    <Card style={{ width: '350px',height:'260px',marginTop:'200px' }}>
      <Card.Body>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone NUmber</Form.Label>
        <Form.Control type="text" placeholder="Phone Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
   

      <Button variant="primary" type="submit" ><link to="/my-app/src/Signup.js">
        submit</link>
      </Button>
 
    </Form>
    </Card.Body>
    </Card>
    </div>
  )
}

export default Signup