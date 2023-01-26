import React, { useState } from 'react'
import './Newone.css'

function Newone() {
    const [car, setcar] = useState({
        Brand:"Bmw",
        Color:"black"
    })
    const changeclr =()=>{
        setcar(cngcl=>{return{...cngcl,Color:"White"}})
    }
  return (

    <div>
    <center>
    <div className="card">
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Cars Brand Is {car.Brand} And Its Color Is {car.Color}</p>
    <button type="button" className="btn btn-primary" onClick={changeclr}>Change Words!</button>
  </div>
    </div>
</center>
    </div>
  )
}

export default Newone