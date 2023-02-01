import React from 'react'
import Link from '../atoms/NavLink'

const NavLinks = () => {
    return (
        <>
            <Link path='/consultation' text='Consultation' />
            <Link path='/osteopathie' text='Ostéopathie' />
            <Link path='/tarifs' text='Tarifs | Remboursements' />
            <Link path='/horaires' text='Horaires' />
            <Link path='/contact' text='Contact' />
        </>
    )
}

export default NavLinks