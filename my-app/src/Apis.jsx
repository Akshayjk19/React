import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Carousel } from "react-bootstrap";

function Apis() {
  const [prod, setprod] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")     
      .then((ap) => setprod(ap.data.products));
  }, []);
  console.log(prod);
  

  return (
    <div className="row" style={{ justifyContent: "center" }}>
      {prod.map((pi) => (
        <Card style={{ width: "18rem", margin: "20px 10px 20px 10px" }}>
          <Carousel>
            {pi.images.map((ca) => (
              <Carousel.Item>
                <Card.Img variant="top" style={{ height: "200px" }} src={ca} />
              </Carousel.Item>
            ))}
          </Carousel>

          <Card.Body>
            <Card.Title>{pi.brand}</Card.Title>
            <Card.Title>{pi.rating}</Card.Title>
            <Card.Text>{pi.category}</Card.Text>
            <Button variant="success">Cart</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Apis;
