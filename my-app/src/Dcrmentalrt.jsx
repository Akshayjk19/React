import React, { useState } from 'react'

function Dcrmentalrt() {
    const [num, setnum] = useState(0)
    const add =()=>{
        setnum(num+1)

    }
    const sub=()=>{
        
            if(num<=0){
            alert('Cannot decrement')
            }else{
                setnum(num-1)
            }
        }
    
  return (
    <div>
    <h1>Number is {num}</h1>
    <button onClick={add}>+</button>
    <button onClick={sub}>-</button>
    </div>
  )
}

export default Dcrmentalrt