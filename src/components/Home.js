import React from 'react'
import styled from 'styled-components'

import Particles from '../containers/Particles'

const blockchainImg = require('../media/blockchain.png')
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

const Image = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
`

const Section1 = styled.div`
  padding: 5vh 15vw 5vh 15vw;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(2, 50%);
  text-align: left;
  @media (max-width: 799px) {
    grid-template-columns: repeat(auto-fill, 100%);
    text-align: center;
  }
  background: #e4e5ed;
  line-height: 1.5;
`

const Column = styled.div`
  align-self: center;
`

const Heading = styled.h3`
  text-transform: uppercase;
  color: #0d1222;
`

const Subheading = styled.p`
  margin-top: 0;
  padding-top: 0;
  color: #a2a7af;
`

const Description = styled.p`
  color: #a2a7af;
`

const Section2 = styled.div`
  padding: 5vh 15vw 5vh 15vw;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr
  text-align: center;
  background: #f9f9fb;
`

const ItemHeading = styled.h3`
  margin-bottom: 0;
  padding-bottom: 0;
`

const ItemDescription = styled.p`
  margin-top: 0;
  padding-top: 0;
`


const Home = () =>
  <HomeWrapper>
    <Banner>
      <Particles />
      <Header>
        <Title>Blockchain Solutions for the Modern World</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Subtitle>
      </Header>
    </Banner>
    <Section1>
      <Column>
        <Image src={blockchainImg} width='28.8vw' height='14.4vw' />
      </Column>
      <Column>
        <Heading>Sed Ut Perspiciatis</Heading>
        <Description>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
        </Description>
      </Column>
    </Section1>
    <Section2>
      <Column>
        <ItemHeading>5.2 M</ItemHeading>
        <ItemDescription>Tokens Created</ItemDescription>
        <ItemHeading>10 K</ItemHeading>
        <ItemDescription>USD Equivalent</ItemDescription>
      </Column>
      <Column>
        <Heading>Heading</Heading>
        <Subheading>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </Subheading>
        <Image src={globeImg} width='30vw' height='30vw' />
      </Column>
      <Column>
        <ItemHeading>1.00</ItemHeading>
        <ItemDescription>Current Rate</ItemDescription>
        <ItemHeading>30 Days Left</ItemHeading>
        <ItemDescription>Ends April 25th, 2018</ItemDescription>
      </Column>
    </Section2>
  </HomeWrapper>

export default Home
