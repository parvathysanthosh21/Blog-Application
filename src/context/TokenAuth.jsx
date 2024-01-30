import React, { createContext, useEffect, useState } from 'react'
export const tokenAuthorisationContext = createContext()

function TokenAuth({ children }) {
    const [isAuthorised, setAuthorised] = useState(false)
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setAuthorised(true)
        }else{
            setAuthorised(false)
        }
    },[isAuthorised])
    return (
        <>


            <tokenAuthorisationContext.Provider value={{ isAuthorised, setAuthorised }}>
                {children}
            </tokenAuthorisationContext.Provider>


        </>
    )
}

export default TokenAuth