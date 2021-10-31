import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const { user, logOut } = useAuth();
    const userIcon = <FontAwesomeIcon icon={faUserCircle} />
    return (<>
        <header class="text-white bg-red-400 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <NavLink to='/' class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span class="ml-3 text-xl">True Tour Mentor</span>
                </NavLink>
                <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <NavLink to='/home' class="mr-5 hover:text-gray-900">
                        Home
                    </NavLink>
                    <NavLink to="/tour-plans" class="mr-5 hover:text-gray-900">Tour Plans</NavLink>
                    <NavLink to='/hotel-booking' class="mr-5 hover:text-gray-900" >
                        Hotel Booking
                    </NavLink>
                    <NavLink to="/photo-book" class="mr-5 hover:text-gray-900">Photo Book</NavLink>
                    <NavLink to='/about-us' class="mr-5 hover:text-gray-900">About Us</NavLink>
                </nav>

                <div class="dropdown inline-block relative">
                    <button class=" text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                        <span class="mr-1">{userIcon} {user.email && user.displayName}</span>
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                    </button>
                    <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                        {user.email && <li class=""><NavLink to='/add-plan' class="rounded-t bg-gray-200 hover:bg-red-400 py-2 px-4 block whitespace-no-wrap">Add Plan</NavLink></li>}
                        {user.email && <li >
                            <NavLink to='/my-plans' class="rounded-t bg-gray-200 hover:bg-red-400 py-2 px-4 block whitespace-no-wrap">
                                My Plans
                            </NavLink>
                        </li>}
                        {user.email && <li >
                            <NavLink to='/manage-all-plans' class="bg-gray-200 hover:bg-red-400 py-2 px-4 block whitespace-no-wrap">
                                Manage All Plans
                            </NavLink>
                        </li>}
                        {
                            user.email ? <li><span
                                onClick={logOut}
                                class="rounded-b bg-gray-200 hover:bg-red-400 py-2 px-4 block whitespace-no-wrap"
                            >Logout</span></li>
                                : <li><NavLink to='/login' class="rounded-b bg-gray-200 hover:bg-red-400 py-2 px-4 block whitespace-no-wrap">Login/Register
                                </NavLink></li>
                        }

                    </ul>
                </div>
            </div>
        </header>
    </>
    );
};

export default Header;