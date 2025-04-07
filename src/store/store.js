import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { PortpolioApi } from '../services/PortpolioApi'



export const store = configureStore({
  reducer: {
    [PortpolioApi.reducerPath]:PortpolioApi.reducer,
  },
 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PortpolioApi.middleware),
})

setupListeners(store.dispatch)