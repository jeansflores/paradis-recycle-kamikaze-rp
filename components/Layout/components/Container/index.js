import { Content } from 'antd/lib/layout/layout';
import React from 'react'
import styled from 'styled-components';

const Main = styled.div`
  width: 1360px;
  max-width: 1360px;
  margin: 24px auto;
  display: flex ;

  @media (min-width: 768px) {
    margin: 40px auto;
  }
`;

const Container = ({ children }) => {
  return (
    <Main>
      <Content>
        {children}
      </Content>
    </Main>
  )
}

export default Container;
