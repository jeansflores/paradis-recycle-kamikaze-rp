import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import React from 'react'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import store from '../store'

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
