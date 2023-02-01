import React from 'react'
import { Link } from 'react-router-dom'
import styled  from 'styled-components'

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
`

const Img = styled.img`
    object-fit: cover;
    width: ${props => props.width};
`

const IconLink = ({path, file, width}) =>{
    return(
        <StyledLink to={path} >
            <Img src={file} width={width} />
        </StyledLink>
    )
}

export default IconLink