import React, { useState } from 'react'
import Numrboot2 from './Numrboot2'

function Tnry() {
    const [hidden, sethidden] = useState(false)
    const showing=()=>{
        sethidden((hh)=>!hh)
    }

  return (
    <div>
    {hidden?<Numrboot2/>:""}
    <button onClick={showing}>{hidden===true?"Hide":"Show"}</button>
    </div>
  )
}
