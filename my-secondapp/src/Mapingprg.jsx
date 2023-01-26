import React from 'react'
import { useState } from 'react'

function Mapingprg() {
  const [wrd, setwrd] = useState([{Name:"Efootball",Types:"Football"},{Name:"Asphalt",Types:"Car Racing"}])
  return (
    wrd.map((game)=>
    <div>
    <h1>{game.Name} {game.Types}</h1>
    </div>
    ) )
}

export default Mapingprg