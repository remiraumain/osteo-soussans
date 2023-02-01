import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = (props) => {
    const { path, text } = props
    return (
        <Link to={path} >{text}</Link>
    )
}

export default NavLink