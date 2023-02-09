import React, { useState } from 'react'
import Props4 from './Props4'

function Props3() {
    const empl=[{id:100,Name:'Akshay',Quali:'Bca'},{id:101,Name:'Zanin',Quali:'Bca'},{id:102,Name:'Aswin',Quali:'Bca'},{id:103,Name:'Abinav',Quali:'Bca'}]
    const [dat, setdat] = useState(empl)
  return (
    <div>
    <Props4 dat={dat} setdat={setdat}/>
    </div>
  )
}

export default Props3