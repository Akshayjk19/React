import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

function Numrboot2() {
    const [num, setnum] = useState(0)
  return (
    // <div>
    <Card className="text-center" style={{display:"flex", width:"250px"}}>
    <Card.Header>Number Increment/Decreement</Card.Header>
    <Card.Body>
      <Card.Text>
      Number :{num}
      </Card.Text>
      <Button variant="primary"onClick={()=>setnum(num+1)}>+</Button>
      <Button variant="primary"onClick={()=>setnum(num-1)}>-</Button>
    </Card.Body>
  </Card>
    // </div>
  )
}

export default Numrboot2