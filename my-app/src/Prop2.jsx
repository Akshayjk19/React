import React from 'react'

const Prop2 = (Prps) => {
    const obj=Prps.obj
    console.log(obj)
  return (
    obj.map((nm) =>
    <div>
<h1>{nm.id} {nm.name}</h1>
    </div>
    ))
}

export default Prop2