import React, { useState } from 'react'
import axios from 'axios'
function Dmyapi() {
    axios.get('https://dummyjson.com/products').then((nam)=>{
        console.log(nam.data.products)
        setfirst(nam.data.products)
    })
    const [first, setfirst] = useState([])
  return (
    first.map((nam)=>(
    <div>
   
        <h1>{nam.title}</h1>
     
    </div>
    ) ) )
}

export default Dmyapi