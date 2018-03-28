import React from 'react'
import styled from 'styled-components'

import Particles from '../containers/Particles'

const globeImg = require('../media/globe.png')

const HomeWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
`

const Banner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom right, #2b3548, #0d1222);
`

const Header = styled.div`
  position: absolute;
  max-width: 800px;
  margin: 10px 0 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Title = styled.h1`
  margin: 1vw 4vw 1vw 4vw;
  padding: 0;
  line-height: 1;
  font-size: 3rem;
  border-radius: 50px;
  color: #edf6fe;
`

const Subtitle = styled.p`
  margin: 1vw 4vw 1vw 4vw;
  padding: 0;
  line-height: 1.5;
  max-width: 800px;
  border-radius: 50px;
  color: #e5eef5;
`

const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 50%);
  padding: 5vh 15vw 5vh 15vw;
  color: #2e3b4c;
  background: #f9f9fb;
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

const Paragraph = styled.p`
  color: #a0a4ad;
`

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 30vw;
`

const Globe = styled.img`
  min-width: 200px;
  width: 30vw;
  min-height: 200px;
  height: 30vw;
`

const Home = () =>
  <HomeWrapper>
    <Banner>
      <Particles />
      <Header>
        <Title>Blockchain Solutions for the Modern World</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </Subtitle>
      </Header>
    </Banner>
    <Section>
      <Details>
        <h1>Nulla Pariatur</h1>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </Paragraph>
      </Details>
      <ImageWrapper>
        <Globe src={globeImg} />
      </ImageWrapper>
    </Section>
  </HomeWrapper>

export default Home
