import React from 'react'
import styled from 'styled-components'

import FacebookSVG from './FacebookSVG'
import TwitterSVG from './TwitterSVG'
import LinkedInSVG from './LinkedInSVG'

const logoImg = require('../media/logo.png')

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  width: 100vw;
  padding: 4vw;
  color: white;
  background: #202530;
`

const Column = styled.div`
  text-align: left;
  @media (max-width: 600px) {
    text-align: center;
  }
`

const Logo = styled.img`
  width: 4.51vh;
  height: 5.19vh;
`

const Footing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 50px;
  padding: 10px;
  font-size: 0.8rem;
  color: white;
  background: #101520;
`

const Footer = () =>
  <FooterWrapper>
    <Grid>
      <Column>
        <Logo alt='company logo' src={logoImg} />
        <h4>FAUX<br/>BLOCKCHAIN<br/>SERVICES</h4>
      </Column>
      <Column>
        <h4>ABOUT</h4>
        <p>Contact Us</p>
        <p>Investors</p>
        <p>Careers</p>
        <p>Team</p>
        <p>FAQ</p>
      </Column>
      <Column>
        <h4>UPDATES</h4>
        <p>Announcements</p>
        <p>Subscribe</p>
        <p>Blog</p>
      </Column>
      <Column>
        <FacebookSVG />
        <TwitterSVG />
        <LinkedInSVG />
      </Column>
    </Grid>
    <Footing>
      <p>Copyright © 2018 Jose Dario Sanchez.</p>
    </Footing>
  </FooterWrapper>

export default Footer
