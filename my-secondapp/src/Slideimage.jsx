import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function Slideimage() {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/649725910/photo/tree-on-grassy-field-against-cloudy-sky.jpg?b=1&s=170667a&w=0&k=20&c=-zRCDgdYqxzuxB-VZu0iqLj5eq_mO74NmW2weF7I5vQ="
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1176579445/photo/sun-shining-through-a-tree-in-rural-landscape.jpg?b=1&s=170667a&w=0&k=20&c=SJL1rThb9ZpNz-w8u2FhcGwJPAp90Db0yM7fNCbb39w="
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default Slideimage