import React from 'react'

function Ary() {
    const ary=["a","b","c"]
  return (
    ary.map((ay)=>
    <div><h1>{ay}</h1></div>
  ))
}

export default Ary