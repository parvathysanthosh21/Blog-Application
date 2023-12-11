import React, { createContext, useState } from 'react'
export const tokenAuthorisationContext = createContext()

function TokenAuth({ children }) {
    const [isAuthorised, setAuthorised] = useState(false)
    return (
        <>


            <tokenAuthorisationContext.Provider value={{ isAuthorised, setAuthorised }}>
                {children}
            </tokenAuthorisationContext.Provider>


        </>
    )
}

export default TokenAuth