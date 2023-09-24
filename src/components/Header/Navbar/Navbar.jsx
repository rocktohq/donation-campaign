import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {

  const [isClicked, setIsClicked] = useState(false);

  const navLinks = <>
    <li><NavLink to="/"><span className="rounded">Home</span></NavLink></li>
    <li><NavLink to="/donation"><span className="rounded">Donation</span></NavLink></li>
    <li><NavLink to="/statistics"><span className="rounded">Statistics</span></NavLink></li>
  </>

  return (
    <nav className="navbar max-w-[1320px] mx-auto px-3 md:px-0">
      <div className="navbar-start">
        <NavLink to="/">
          <Logo></Logo>
        </NavLink>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="text-[18px] flex gap-5 items-center justify-center">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end flex lg:hidden">
        <div className="dropdown dropdown-end">
          <label onClick={() => setIsClicked(!isClicked)} tabIndex={0} className="btn btn-ghost lg:hidden">
            {
              <AiOutlineMenu></AiOutlineMenu>
            }
          </label>
          <ul tabIndex={0} className="text-[18px] dropdown-content mt-3 z-[1] p-2 shadow-md bg-base-100 rounded w-52 px-10 py-5">
            {navLinks}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
