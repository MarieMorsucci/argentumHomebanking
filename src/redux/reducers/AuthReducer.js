import { createReducer } from '@reduxjs/toolkit';
import { login,logout } from '../actions/AuthActions'; 

//se hace afuera del metodo. puede guiardar un sring o un numero, lo que sea, se usa objeto porque es mas flexible
const initialState={
  loggedIn: false,
  
  user:{
    name:'',
    email:'',
    token:'',
    expiresIn :'',
}
}

//builder.addCase(type,callback):hay que pasar una accion- defaultCase: cuando no sea ninguna accion-matcher:matchear acciones con accion
const authReducer = createReducer(initialState, (builder)=>{
builder.addCase(login,(state,action) => {

  return{
    //spread las prop que YA TIENE! y le sobrescribe otras, es este caso user
    ...state,
    loggedIn:action.payload.loggedIn,
    user: {
      name: action.payload.name,
      email: action.payload.email,  
      token:action.payload.token,
      expiresIn:action.payload.expiresIn,
    }
  }
})
.addCase(logout,(state,action)=>{
  return initialState;
})
})
export default authReducer;  //exportar el reducer para que se pueda utilizar en el store