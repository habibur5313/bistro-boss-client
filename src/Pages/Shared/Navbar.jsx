import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useCart from "../../CustomHooks/useCart";

const Navbar = () => {
  const {user,handleSignOut} = useContext(AuthContext)
  const [cart,refetch] = useCart()
  return (
      <div className="navbar fixed container mx-auto text-white bg-black bg-opacity-20 z-20 rounded-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/menu'}>Menu</NavLink></li>
          <li><NavLink to={'/shop/offered'}>Shop</NavLink></li>
          <li><NavLink to={'/dashboard'}>Cart<div className="badge badge-secondary">+{cart.length}</div></NavLink></li>
         {user ?   <li><button onClick={handleSignOut}>logOut</button></li>
          : <li><NavLink to={'login'}>Login</NavLink></li>
}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl uppercase">Bistro Boos</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'/menu'}>Menu</NavLink></li>
          <li><NavLink to={'/shop/offered'}>Shop</NavLink></li>
          <li><NavLink to={'/dashboard'}>Cart<div className="badge badge-secondary">+{cart.length}</div></NavLink></li>
          {user ?   <li><button onClick={handleSignOut}>logOut</button></li>
          : <li><NavLink to={'login'}>Login</NavLink></li>
}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
  );
};

export default Navbar;
