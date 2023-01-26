import React from 'react'
import { useState } from 'react'
import Prop2 from './Prop2'

function Props() {const [obj, setobj] = useState([{id:201,name:"Jhon"},{id:202,name:"Cena"}])
  return (
    <div>
    <Prop2 obj={obj}/>
    </div>
  )
}

export default Props