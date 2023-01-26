import React from 'react'
import { useState } from 'react'

function Spread() {const [infr, setinfr] = useState([{
    
    Game:"Sports",
    name:"Efootball"
}])
const wrdcng =()=>{
    setinfr (prv=>{return{...prv,Game:"Football"}})
} 
  return (



    <div>
    <h1>The {infr.name} Is a {infr.Game} Game </h1>
    <button onClick={wrdcng}>Change</button>
    </div>
    )
}

export default Spread