import React from 'react'
import { Button, Card, Row } from "react-bootstrap";

function Car() {
   const a = [
     {
       id: 1,
       name: "kavya",
       salary: 30000,
       Image:

"https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg",
     },
     {
       id: 2,
       name: "john",
       salary: 40000,
       Image:

"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
     },
   ];

   return (
     <Row style={{ display: "flex", flexDirection: "row" }}>
       {a.map((abc) => (
         <Card
           style={{
             width: "18rem",
             display: "flex",
             //flexDirection: "row",
             alignItems: "center",
             margin: "10px",
             color: "white",
             backgroundColor: "grey",
             border: "3px solid black"

           }}
         >
           <Card.Img variant="top" src={abc.Image} 
           style={{
            height:"15rem"
            }} />

           <Card.Body>
             <Card.Title>{abc.id}</Card.Title>

             <Card.Text>
               {abc.name},{abc.salary}
             </Card.Text>
             <Button variant="primary">Go somewhere</Button>
           </Card.Body>
         </Card>
       ))}
     </Row>
   );
}


export default Car