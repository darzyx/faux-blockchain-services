import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavbarWrapper = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  width: 100vw;
  max-width: 500px;
  height: 15vh;
  display: grid;
  align-items: center;
  grid-template-columns: auto auto auto;
`

const NavbarColumn = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
`

const NavbarLink = styled(NavLink)`
  text-transform: uppercase;
  text-decoration: none;
  color: #404550;
  &:hover { color: rgba(85,138,242,1); }
`

const NavbarText = styled.h3`
  margin: 0;
  padding: 0;
`

const Navbar = () =>
  <NavbarWrapper>
    <NavbarColumn>
      <NavbarLink to='/'>
        <NavbarText>Home</NavbarText>
      </NavbarLink>
    </NavbarColumn>
    <NavbarColumn>
      <NavbarLink to='/services'>
        <NavbarText>Services</NavbarText>
      </NavbarLink>
    </NavbarColumn>
    <NavbarColumn>
      <NavbarLink to='/team'>
        <NavbarText>Team</NavbarText>
      </NavbarLink>
    </NavbarColumn>
  </NavbarWrapper>

export default Navbar
