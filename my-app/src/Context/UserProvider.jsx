import React, { createContext, useContext, useState } from 'react'
const UserContext=createContext()

const UserProvider = ({children}) => {
   
    const [wrod, setwrod] = useState({id:201,name:"Akshay"})

  return ( 
       
      <div>
    <UserContext.Provider value={{wrod,setwrod}}>
    {children}
    </UserContext.Provider>
    </div>
  )

}
export const Userstate=()=>{return useContext(UserContext)
}
export default UserProvider