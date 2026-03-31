import React from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Players", path: "/players" },
  { id: 3, name: "My Team", path: "/team" },
  { id: 4, name: "Leaderboard", path: "/leaderboard" },
  { id: 5, name: "About", path: "/about" },
];

const linsk = navItems.map((item) => <Link item={item}></Link>);

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between mx-10">
      <span className="flex" onClick={() => setOpen(!open)}>
        {open ? (
          <X className=""></X>
        ) : (
          <Menu className=""></Menu>
        )}

        <ul
  className={`absolute duration-500 ${open ? "top-8" : "-top-40"} bg-amber-200`}
>
  {linsk}
</ul>

        <h3 className="ml-4">My Navbar</h3>
      </span>

      <ul className="flex  ">{linsk}</ul>

      {/* <ul className='flex'>
            <li className='mr-10'> <a href="/">Home</a></li>
            <li className='mr-10'> <a href="/about">About</a></li>
            <li className='mr-10'> <a href="/contact">Contact</a></li>    
        </ul> */}
      <button>sing in</button>
    </nav>
  );
};

export default NavBar;
