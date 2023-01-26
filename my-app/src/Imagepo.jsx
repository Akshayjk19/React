import React from 'react'
import { Userstate } from './Context/UserProvider'

function Imagepo() {
    const {wrod}=Userstate()
  return (
    
    <div>
    <h1>{wrod.id} {wrod.name}</h1>
    <img src={wrod.img}/>
    
    </div>
  )
}

export default Imagepo