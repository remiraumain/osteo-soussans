import React from 'react'
import Link from '../atoms/NavLink'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`

const NavLinks = () => {
    return (
        <Container>
            <Link path='/consultation' text='Consultation' />
            <Link path='/osteopathie' text='Ostéopathie' />
            <Link path='/tarifs' text='Tarifs | Remboursements' />
            <Link path='/horaires' text='Horaires' />
            <Link path='/contact' text='Contact' />
        </Container>
    )
}

export default NavLinks