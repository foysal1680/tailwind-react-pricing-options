import React from 'react'
import Link from './Link'

const navItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Players", path: "/players" },
  { id: 3, name: "My Team", path: "/team" },
  { id: 4, name: "Leaderboard", path: "/leaderboard" },
  { id: 5, name: "About", path: "/about" }
];

export const NavBar = () => {
  return (
    <nav>

        <ul className='flex'>
            {
        navItems.map(item => <Link item={item}></Link> )
        }
        </ul>


        {/* <ul className='flex'>
            <li className='mr-10'> <a href="/">Home</a></li>
            <li className='mr-10'> <a href="/about">About</a></li>
            <li className='mr-10'> <a href="/contact">Contact</a></li>    
        </ul> */}
    </nav>
  )
}

export default NavBar
