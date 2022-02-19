import React, { useEffect } from 'react'
import { Header as HeaderAntd } from 'antd/lib/layout/layout';
import { Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Image from 'next/image'
import Logo from '../../../../public/logo.png'
import styled from 'styled-components';
import { Typography } from 'antd';

const { Title } = Typography;

const Container = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Brand = styled.a`
  align-self: center;

  h3 {
    margin-right: 24px;
    margin-bottom: 0;
  }
`;

const Header = () => {
  const router = useRouter();
  const { pathname } = router;
  const selectedKey = pathname !== '/' ? [pathname] : [''];

  return (
    <HeaderAntd>
      <Container>
        <Link href="/">
          <Brand>
            <Title level={3}>Paradis Recycle</Title>
          </Brand>
        </Link>
        <Menu theme="light" mode="horizontal" selectedKeys={selectedKey} style={{ width: 245 }}>
          <Menu.Item key="/compra">
            <Link href="/compra">
              <a>
                Compra
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/venda">
            <Link href="/venda">
              <a>
                Venda
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/meta">
            <Link href="/meta">
              <a>
                Meta
              </a>
            </Link>
          </Menu.Item>
        </Menu>
      </Container>
    </HeaderAntd>
  )
}

export default Header;
