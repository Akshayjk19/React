import React, { useState } from 'react'
import './Btns.css'

function Btns() {
 
    const [colr, setcolr] = useState("black")
    use
  return (
    <div>
    <div className='clrcng'>
    <h1>Text Color is {colr}  </h1>
    <button onClick={()=>setcolr("Red")} className='red'>Red</button>
    <button onClick={()=>setcolr("Blue")} className='blue'>Blue</button>
    <button onClick={()=>setcolr("Green")} className='green'>Green</button>
    <button onClick={()=>setcolr("Yellow")} className='yellow'>Yellow</button>

    </div>
    </div>
  )
}


export default Btns