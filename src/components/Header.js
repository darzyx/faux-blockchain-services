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
`

const Content = styled.div`
  position: absolute;
`

const Header = () =>
  <HeaderWrapper>
    <Particles />
    <Content>
      <h1>Faux Blockchain Services</h1>
    </Content>
  </HeaderWrapper>

export default Header
