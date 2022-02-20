import React from 'react'

import WrapperContainer from './components/Container'
import Footer from './components/Footer'
import WrapperHeader from './components/Header'

const Layout = ({ children }) => {
  return (
    <main className="bg-base-200">
      <WrapperHeader>
        <WrapperContainer>
          {children}
        </WrapperContainer>
        <Footer />
      </WrapperHeader>
    </main>
  )
}

export default Layout
