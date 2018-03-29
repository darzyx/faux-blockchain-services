import React from 'react'
import styled from 'styled-components'

const RoadmapWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  line-height: 1.5;
  color: #404550;
`

const Header = styled.div`
  padding: 15vh 15vw 5vh 15vw;
  color: #FFF;
  background: linear-gradient(to bottom right, #2b3548, #0d1222);
`

const Roadmap = () =>
  <RoadmapWrapper>
    <Header>
      <center>
        <h1>Roadmap</h1>
      </center>
    </Header>
  </RoadmapWrapper>

export default Roadmap
