import React from 'react'

const Prop2 = (Props) => {
    const obj=Props.obj
    console.log(obj)
  return (
    obj.map((nm) =>
    <div>
<h1>{nm.id} {nm.name}</h1>
        
    </div>
    ))
}

export default Prop2