import React from 'react'
import styled from 'styled-components'
import IconLink from '../atoms/IconLink'
import NavLink from '../molecules/NavLinks'

import logo from '../assets/logo/logoWhite.svg'

const Container = styled.nav`
    background: ${props => props.theme.colors.dark};
    height: 100px;
    display: grid;
    grid-auto-rows: minmax(50px, auto);
    padding: 0 25px;
    grid-column: 3;
    grid-row: 1;
`

const Logo = styled(IconLink)`
    grid-column: 1;
    grid-row: 1;
`

const PageLinks = styled(NavLink)`
    grid-column: 2;
    grid-row: 1;
`

const StyledDiv = styled.div`
    grid-column: 3;
    grid-row: 1;
`


const Navbar = () => {
  return (
    <Container>
        <Logo path='/' type='svg' file={logo} width={'200px'} />
        <PageLinks />
        <StyledDiv>Test</StyledDiv>
    </Container>
  )
}

export default Navbar