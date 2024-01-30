import React, { createContext, useState } from 'react'
export const addBlogResponseContext = createContext()
export const editBlogResponseContext =createContext()
export const editProfileResponceContext = createContext()
function ContextShares({children}) {
    const [addBlogResponse,setAddBlogResponse] = useState({})
    const [editBlogResponse,setEditBlogResponse] = useState({})
    const [editProfileResponce,setEditProfileResponce] = useState({})
  return (
    <>

  <addBlogResponseContext.Provider value={{addBlogResponse,setAddBlogResponse}}>  
  <editBlogResponseContext.Provider value={{editBlogResponse,setEditBlogResponse}}>
    <editProfileResponceContext.Provider value={{editProfileResponce,setEditProfileResponce}}>
      
         {children}
         
    </editProfileResponceContext.Provider>
  </editBlogResponseContext.Provider>
    </addBlogResponseContext.Provider>

    </>
  )
}

export default ContextShares