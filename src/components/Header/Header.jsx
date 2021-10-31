import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-purple-500 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                    <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
                        True Tour Mentor
                    </a>
                    <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                        <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                    </button>
                </div>
                <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
                    <ul className="flex flex-col lg:flex-row list-none ml-auto">
                        <li className="nav-item">
                        <NavLink to='/home' className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                            Home
                        </NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                Tour Plans
                            </a>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink to='/hotel-booking' className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" >
                                Hotel Booking
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/photo-book' className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" >
                                Photo Book
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about-us' className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" >
                                About Us
                            </NavLink>
                        </li>
                        {user.email && <li className="nav-item">
                            <NavLink to='/my-plans' className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                                My Plans
                            </NavLink>
                        </li>}
                        {user.email && <li className="nav-item">
                            <NavLink to='/manage-all-plans' className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                                Manage All Plans
                            </NavLink>
                        </li>}
                        <li className="nav-item">
                            {user.email && user.displayName}
                        {
                            user.email? <button onClick={logOut}>Logout</button>
                            : <NavLink to='/login' className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                            <i class="far fa-user-circle"></i>&nbsp;Login/Register
                            </NavLink>
                        }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;