
import React from 'react'
import { NavLink } from 'react-router-dom';
import './navbar.css';


const Navbar = () => {
    return (
        <nav className='navbar p-1 flex mb-5'>
            <div className='logo w-20 h-20 mr-2'>
                logo
            </div>

            <ul className='ml-3'>
                <li>
                    <NavLink to='/' >Home</NavLink>
                    <NavLink to='/' >Login</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;




