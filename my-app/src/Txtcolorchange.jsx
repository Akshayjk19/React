import React, { useState } from 'react'

function Txtcolorchange() {
 const [color, setcolor] = useState("Black")
//  const [txt, settxt] = useState("Text Color")
 const clr ={
    color:color
 }
 
 
  return (
    <div>
    <h1 style={clr}>Text color</h1>
    <button onClick={()=>{setcolor('green')}} >Green</button>
    <button onClick={()=>{setcolor('red')}} >Red</button>
    <button onClick={()=>{setcolor('Blue')}} >Blue</button>
   <button onClick={()=>{setcolor('Yellow')}} >Yellow</button>
    
    
    </div>
  )
}

export default Txtcolorchange