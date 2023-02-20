import React, { createContext, useState } from 'react'
const newcontext=createContext()
function NewContext({children}) {
    const [name, setname] = useState('Peter')
    const [ary, setary] = useState([{id:1002,name:"Akshay"},{id:1003,name:'Zanin'}])
  return (
    <div>
    <newcontext.Provider value={{name,setname,ary,setary}}>
    {children}
    </newcontext.Provider>
    </div>
  )
}

export default NewContext
export {newcontext}