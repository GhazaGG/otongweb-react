import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'


export const UserContext = createContext({})

const UserContextProvider = ({children}) => {
    const[user, setUser] = useState(null)
    const[ready, setReady]  = useState(false)
    useEffect(()=> {
        if(!user){
            axios.get('/dashboard').then(({data})=>{
                setUser(data)
                setReady(true)
            })
        }
    },[])
    return (
        <UserContext.Provider value={{user, setUser,ready}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider