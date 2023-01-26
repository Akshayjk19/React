import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Carol() { const crs=[{pic:"https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg"},{pic:"https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg"},{pic:"https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg"}]
  return (
    
    <div>
    <Carousel>
    {crs.map((im)=>{
      return(

      <Carousel.Item >
        <img
          className="d-block w-100"
          src={im.pic}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      
      
      )})}
    </Carousel>
    </div>
  )
}

export default Carol