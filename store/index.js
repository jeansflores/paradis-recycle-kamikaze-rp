import { configureStore } from '@reduxjs/toolkit'

import extractReducer from './reducers/extract'

export default configureStore({
  reducer: {
    extract: extractReducer
  }
})
