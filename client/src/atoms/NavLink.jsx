import React from 'react'
import { Link } from 'react-router-dom'
import styled  from 'styled-components'

const StyledLink = styled(Link)`
    color: ${props => props.theme.colors.white};
    font-weight: ${props => props.theme.fontWeights.semiBold};
    text-decoration: none;
    padding: 10px 12px;
    border-radius: 7px;

    &:hover {
        color: ${props => props.theme.colors.dark};
        background: ${props => props.theme.colors.white};
    }
`


const NavLink = (props) => {
    const { path, text } = props
    return (
        <StyledLink to={path} >{text}</StyledLink>
    )
}

export default NavLink