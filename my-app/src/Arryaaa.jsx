import React from 'react'
import { Userstate } from './Context/UserProvider'

function Arryaaa() {
    const {wrod}=Userstate()
  return (
wrod.map((nw)=>
    <div>
    <h1>{nw.id} {nw.name}</h1>
    </div>
  ))
}

export default Arryaaa