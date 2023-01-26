import React, { useState } from 'react'

function SpreadOp() {
    const [car, setcar] = useState({Brand:"Ford",Model:"Mustang"})
    const change=()=>{
        setcar(sp=>{return{...sp,Model:"Endeavour"}})
    }
    
  return (
    <div>
   <h1>
   {car.Brand}and {car.Model}
   </h1>
   <button onClick={change}>Change</button>
    </div>
  )
}

export default SpreadOp