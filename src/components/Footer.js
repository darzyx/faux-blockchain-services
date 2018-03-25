import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import FacebookSVG from './FacebookSVG'
import TwitterSVG from './TwitterSVG'
import LinkedInSVG from './LinkedInSVG'

const logoImg = require('../media/logo.png')

const FooterWrapper = styled.div`
  width: 100vw;
  background: #202530;
`

const Grid = styled.div`
  display: grid;
  padding: 5vh 5vw 5vh 5vw;
  width: 100vw;
  color: white;
  @media (min-width: 700px) {
    grid-template-columns: repeat(4, 25%);
  }
  @media (max-width: 699px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  @media (max-width: 450px) {
    grid-template-columns: repeat(auto-fill, 1fr);
  }
`

const Column = styled.div`
  text-align: left;
  @media (max-width: 450px) {
    text-align: center;
  }
`

const FooterLink = styled(Link)`
  font-size: 0.9rem;
  text-decoration: none;
  color: #AAB3C1;
  &:hover { color: #558AF2; }
`

const Logo = styled.img`
  width: 4.51vh;
  height: 5.19vh;
`

const Divider = styled.hr`
  width: 90vw;
  height: 1px;
  color: white;
  background: white;
  border: none;
`

const Footing = styled.div`
  width: 100vw;
  padding: 1vh 5vw 9vh 5vw;
  font-size: 0.7rem;
  color: #AAB3C1;
  text-align: right;
  @media (max-width: 450px) {
    text-align: center;
  }
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
        <FooterLink to='/'><p>Contact Us</p></FooterLink>
        <FooterLink to='/'><p>Services</p></FooterLink>
        <FooterLink to='/'><p>Careers</p></FooterLink>
        <FooterLink to='/'><p>Team</p></FooterLink>
        <FooterLink to='/'><p>FAQ</p></FooterLink>
      </Column>
      <Column>
        <h4>UPDATES</h4>
        <FooterLink to='/'><p>Announcements</p></FooterLink>
        <FooterLink to='/'><p>Subscribe</p></FooterLink>
        <FooterLink to='/'><p>Blog</p></FooterLink>
      </Column>
      <Column>
        <h4>FOLLOW</h4>
        <span>
          <FacebookSVG />
          <TwitterSVG />
          <LinkedInSVG />
        </span>
      </Column>
    </Grid>
    <Divider />
    <Footing>
      <p>
        Terms |
        Privacy |
        support@fauxblockchain.com |
        (000) 000-0000 |
        © Faux Blockchain Services
      </p>
    </Footing>
  </FooterWrapper>

export default Footer
