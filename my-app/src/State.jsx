import React, { useState } from 'react'

function State() {
  
    const [name, setname] = useState("Levi")
    return (
    <div>
    <h1>My name is {name}</h1>
    <button onClick={()=>setname("jhon")}>Change</button>
    </div>
  )
}

export default State