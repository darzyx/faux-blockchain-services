import React from 'react'
import styled from 'styled-components'

import Particles from '../containers/Particles'

const logoImg = require('../media/logo.png')

const HomeWrapper = styled.div`
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
  margin: 10px 0 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Logo = styled.img`
  width: 9.02vh;
  height: 10.38vh;
`

const Divider = styled.hr`
  width: 5vw;
  height: 2px;
  background: ${props => props.hidden ? 'none' : 'rgba(85,138,242, 1)'};
  border: none;
`

const Title = styled.h1`
  margin: 1vw 4vw 1vw 4vw;
  padding: 0;
  line-height: 1;
  font-size: 3rem;
  border-radius: 50px;
  color: #404550;
`

const Description = styled.p`
  margin: 1vw 4vw 1vw 4vw;
  padding: 0;
  line-height: 1.5;
  max-width: 800px;
  border-radius: 50px;
  color: #404550;
  background: rgba(240,243,246, 0.8);
`

const Home = () =>
  <HomeWrapper>
    <Particles />
    <Content>
      <Logo alt='company logo' src={logoImg} />
      <Divider />
      <Title>Faux Blockchain Services</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </Description>
    </Content>
  </HomeWrapper>

export default Home
