import React, { createContext, useContext, useState } from 'react'
const UserContext=createContext()

const UserProvider = ({children}) => {
   
    const [wrod, setwrod] = useState({id:201,name:"Akshay",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbQluHdBIJ90hxaJRYxuYCLF3NjZ7ivSD3wxwie-Xsz2LvsnzPuJTbWxr-DphodBfJ34g&usqp=CAU"})


  return ( 
       
      <div>
    <UserContext.Provider value={{wrod}}>
    {children}
    </UserContext.Provider>
    </div>
  )

}
export const Userstate=()=>{return useContext(UserContext)
}
export default UserProvider