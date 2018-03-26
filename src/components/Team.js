import React from 'react'
import styled from 'styled-components'

const portrait1 = require('../media/portrait1.jpg')
const portrait2 = require('../media/portrait2.jpg')
const portrait3 = require('../media/portrait3.jpg')
const portrait4 = require('../media/portrait4.jpg')
const portrait5 = require('../media/portrait5.jpg')
const portrait6 = require('../media/portrait6.jpg')

const TeamWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  color: #404550;
`

const Header = styled.div`
  padding: 15vh 15vw 5vh 15vw;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin: 0;
  padding: 5vh 15vw 5vh 15vw;
  background: #A6B7D8;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Portrait = styled.img`
  border-radius: 50%;
  border: 3px solid #558AF2;
  width: 175px;
`

const Name = styled.h4`
  margin: 10px 0 5px 0;
  padding: 0;
`

const Role = styled.p`
  margin: 5px 0 25px 0;
  padding: 0;
`

const Team = () =>
  <TeamWrapper>
    <Header>
      <center>
        <h1>Meet the Faux Blockchain Team</h1>
      </center>
    </Header>
    <Grid>
      <Column>
        <Portrait src={portrait1} />
        <Name>Person One</Name>
        <Role>Founder and CEO</Role>
      </Column>
      <Column>
        <Portrait src={portrait2} />
        <Name>Person Two</Name>
        <Role>Chief Operating Officer</Role>
      </Column>
      <Column>
        <Portrait src={portrait3} />
        <Name>Person Three</Name>
        <Role>Chief Technology Officer</Role>
      </Column>
      <Column>
        <Portrait src={portrait4} />
        <Name>Person Four</Name>
        <Role>Chief Financial Officer</Role>
      </Column>
      <Column>
        <Portrait src={portrait5} />
        <Name>Person Five</Name>
        <Role>Ethereum Architect</Role>
      </Column>
      <Column>
        <Portrait src={portrait6} />
        <Name>Person Six</Name>
        <Role>Chief Communications Officer</Role>
      </Column>
    </Grid>
  </TeamWrapper>

export default Team
