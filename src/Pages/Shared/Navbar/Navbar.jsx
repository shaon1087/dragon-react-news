import { Link, NavLink } from "react-router-dom";
import userImage from '../../../assets/user.png'


const navLink = <>
     <li><NavLink to='/'>Home</NavLink></li>
     <li><NavLink to='/About'>About</NavLink></li>
     <li><NavLink to='/Career'>Career</NavLink></li>
     <li><NavLink to='/Login'>Login</NavLink></li>
</>
const Navbar = () => {
    return (
        <div className="pt-8">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navLink}
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navLink}
    </ul>
  </div>
 
  <div className="navbar-end">
     {/* login photo is here */}
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={userImage}/>
        </div>
      </div>
    <Link to='./Login'>
     <button className="p-4 btn">Login</button>
    </Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;