import React, { useContext } from 'react'
import { newcontext } from './NewContext'

const Home = () => {
    const samp=useContext(newcontext)
    const {name,setname,ary,setary}=samp
  return (
    <div>
    {ary.map((n)=>
        <h1>{n.id} - {n.name}</h1>
        )}
    <h1>{name}</h1>
    <button onClick={()=>setname('Hi')}>Change</button>

    </div>
  )
}

export default Home