import React from 'react'

function Props4 ({dat,setdat}) {
    const obj={id:105,Name:'god',Quali:'Master'}
   
  return (

    <div>
    {dat.map((n)=>
        <h1>{n.id}{n.Name}{n.Quali}</h1>
       
        )}
        <button onClick={()=>setdat(obj)}>change</button>
    </div>
  )
}

export default Props4