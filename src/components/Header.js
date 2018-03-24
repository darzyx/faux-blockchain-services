import React from 'react'
import styled from 'styled-components'

import Particles from '../containers/Particles'

const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(240,243,246, 1);
`

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Title = styled.h1`
  line-height: 1;
  font-size: 3.5rem;
  color: rgba(85,138,242, 1);
`

const Header = () =>
  <HeaderWrapper>
    <Particles />
    <Content>
      <Title>Faux Blockchain Services</Title>
    </Content>
  </HeaderWrapper>

export default Header
