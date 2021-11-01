import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (<>
        <footer class="text-gray-600 body-font">
            <div className="container mx-auto grid md:grid-cols-4 gap-4">
                <div className="col-span-2">
                    <Link to="/" class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <span class="ml-3 text-xl text-red-700">True Tour Mentor</span>
                    </Link>
                    <p class="mt-2 w-3/4 text-sm text-gray-500">A tour planer organization. We prioratize the customer satisfactions. You can belive in us that we care about you.</p>
                </div>
                <div>
                    <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                    <nav class="list-none mb-10">
                        <li>
                            <Link to='/' class="text-gray-600 hover:text-gray-800">Tour Plans</Link>
                        </li>
                        <li>
                            <Link to='/' class="text-gray-600 hover:text-gray-800">Hotel Bookings</Link>
                        </li>
                        <li>
                            <Link to='/about-us' class="text-gray-600 hover:text-gray-800">About Us</Link>
                        </li>

                    </nav>
                </div>
                <div>
                    <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Contact us</h2>
                    <nav class="list-none mb-10">

                        <li>
                            <span class="text-gray-600 hover:text-gray-800"><i class="fas fa-phone"></i>&nbsp;01777777777</span>
                        </li>
                        <li>
                            <span class="text-gray-600 hover:text-gray-800"><i class="fas fa-envelope"></i>&nbsp;true.tour.mentor@gmail.com</span>
                        </li>
                        <li>
                            <span class="text-gray-600 hover:text-gray-800"><i class="fas fa-map-marker-alt"></i>&nbsp;House-12, Lane-12, Block-X, Mirpur-2, Dhaka-1216, Bangladesh</span>
                        </li>
                    </nav>
                </div>
            </div>
            
            <div class="bg-gray-100">
                <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p class="text-gray-500 text-sm text-center sm:text-left">© 2021 True Tour Mentor —
                        <Link to="/" href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@MashodRana</Link>
                    </p>
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <Link to="/" class="text-gray-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </Link>
                        <Link to="/" class="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </Link>
                        <Link to="/" class="ml-3 text-gray-500">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </Link>
                        <Link to="/" class="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </Link>
                    </span>
                </div>
            </div>
        </footer>
    </>);
};

export default Footer;