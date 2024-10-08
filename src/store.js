import { configureStore } from '@reduxjs/toolkit'
import userdata from './Slices/userslice'

export default configureStore({
  reducer: {
    info: userdata,
  },
})
