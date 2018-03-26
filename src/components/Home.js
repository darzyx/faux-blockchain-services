import React from 'react'
import styled from 'styled-components'

import Particles from '../containers/Particles'

const logoImg = require('../media/logo.png')
const blockchainImg = require('../media/blockchain.png')

const HomeWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
`

const Main = styled.div`
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 50%);
  padding: 5vh 15vw 5vh 15vw;
  color: #404550;
  background: #A6B7D8;
  @media (max-width: 650px) {
    grid-template-columns: repeat(auto-fill, 100%);
  }
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 30vw;
`

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 30vw;
`

const Image = styled.img`
  min-width: 200px;
  width: 30vw;
  min-height: 150px;
  height: 22.5vw;
`

const Home = () =>
  <HomeWrapper>
    <Main>
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
    </Main>
    <Grid>
      <Details>
        <h1>Nulla Pariatur</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </Details>
      <ImageWrapper>
        <Image src={blockchainImg} />
      </ImageWrapper>
    </Grid>
  </HomeWrapper>

export default Home
