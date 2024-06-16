import { createAction } from '@reduxjs/toolkit'

export const login =createAction('LOGIN', (data)=>{
    //no se puede hacer logica, la transformacion es minima (el reductor la va a hacer)
    //aca puedo sanitizar o transformar lo que me llega el user como por ejemplo
    const clearUser={
        name: data.firstName+' '+data.lastName,
        email: data.email,
        token: data.token,
        expiresIn: new Date(Date.now()+1000*60*60).toISOString(),
        loggedIn: true
        
    }

    //payload va a viajar lo que yo quiero que viaje al reducer
    return {payload:
        clearUser  
    }

})


export const logout= createAction('LOGOUT')