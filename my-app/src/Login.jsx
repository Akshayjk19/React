import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import Signup from './Signup'

function Login() {

    const [username, setusername] = useState('')
    const [passd, setpassd] = useState('')
// console.log(username);
// console.log(passd);

const name=(event)=>{
    setusername(event.target.value)
}
const password=(event)=>{
    setpassd(event.target.value)
}
const submit=(event)=>{
    console.log(event);
    event.preventDefault()
    console.log(`name:${username},pass:${passd}`);
}

  return (
    <div className='d-flex justify-content-center' >
   
    <Card style={{ width: '350px',height:'260px',marginTop:'200px' }}>
      <Card.Body>
    <Form onSubmit={submit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
         <Form.Control type="text" placeholder="Enter Username"  onChange={name}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword"  >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={password}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit" >
        Login
      </Button>
    
    </Form>
    </Card.Body>
    </Card>
    </div>
    
  )
}

export default Login