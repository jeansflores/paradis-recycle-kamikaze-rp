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

const CustomHeader = styled(HeaderAntd)`
  padding: 0 24px !important;

  @media (min-width: 768px) {
    padding: 0 40px !important;
  }
`;

const Container = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Brand = styled.a`
  display: flex;
  max-height: 50px;
  align-self: center;
  align-item: center;

  h3 {
    display: none;
    align-self: center;
    margin-right: 24px;
    margin-bottom: 0;
  }

  span {
    display: inline-block !important;
    width: 50px;
    max-height: 50px;
  }

  img {
    margin-right: 8px !important;
  }

  @media (min-width: 576px) {
    h3 {
      display: block;
    }
  }
`;

const Header = () => {
  const router = useRouter();
  const { pathname } = router;
  const selectedKey = pathname !== '/' ? [pathname] : [''];

  return (
    <CustomHeader>
      <Container>
        <Link href="/" passHref>
          <Brand>
            <Image src="/potencia.png" alt="Paradis Recycle" width="50" height="50" />
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
    </CustomHeader>
  )
}

export default Header;
