import React, { createContext, useState } from 'react'
export const addBlogResponseContext = createContext()
export const editBlogResponseContext =createContext()

function ContextShares({children}) {
    const [addBlogResponse,setAddBlogResponse] = useState({})
    const [editBlogResponse,setEditBlogResponse] = useState({})
  return (
    <>

  <addBlogResponseContext.Provider value={{addBlogResponse,setAddBlogResponse}}>  
  <editBlogResponseContext.Provider value={{editBlogResponse,setEditBlogResponse}}>
    
       {children}
       
  </editBlogResponseContext.Provider>
    </addBlogResponseContext.Provider>

    </>
  )
}

export default ContextShares