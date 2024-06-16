
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/AuthReducer'

export const store = configureStore({
  reducer: {
    authReducer
    //agregar reductores aqui
  }
})
