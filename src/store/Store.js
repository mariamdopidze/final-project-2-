import { configureStore } from '@reduxjs/toolkit'
import counter from './app/Counter'
export const store = configureStore({
  reducer: {
counter: counter
  },
})