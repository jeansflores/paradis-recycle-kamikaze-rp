import React from 'react'
import Layout from 'antd/lib/layout/layout';
import Header from './components/Header';
import Footer from './components/Footer';

const LayoutPage = ({ children }) => {
  return (
    <Layout className="main">
      <Header />
      {children}
      <Footer />
    </Layout>
  )
}

export default LayoutPage;
