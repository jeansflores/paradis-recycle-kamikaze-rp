import React from 'react'
import Layout from 'antd/lib/layout/layout';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';

const LayoutPage = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Container>
        {children}
      </Container>
      <Footer />
    </Layout>
  )
}

export default LayoutPage;
