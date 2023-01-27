import React, { useState } from 'react'
import { Userstate } from './Context/UserProvider'

function Sprd() {
  const {wrod,setwrod}=Userstate()
  
const change=()=>{
    setwrod(nw=>{return{...nw,name:"Zanin"}})
}

  return (
    
    <div>
  <h1>{wrod.id} {wrod.name}</h1>
  <button onClick={change}>Change</button>
    
    
    </div>
  )
}

export default Sprd