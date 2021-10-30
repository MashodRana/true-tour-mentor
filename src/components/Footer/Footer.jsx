import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer class="footer bg-white relative pt-1 border-b-2 border-blue-700">
    <div class="container mx-auto px-6">

        <div class="sm:flex sm:mt-8">
            <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                
                <div class="flex flex-col">
                    <h2 className="text-4xl">True Tour Mentor</h2>
                    <p>A tour planer organization. We prioratize the customer satisfactions.</p>
                </div>
                <div class="flex flex-col">
                    <span class="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Footer header 2</span>
                    <span class="my-2"><a href="#" class="text-blue-700 text-md hover:text-blue-500">link 1</a></span>
                    <span class="my-2"><a href="#" class="text-blue-700  text-md hover:text-blue-500">link 1</a></span>
                    <span class="my-2"><a href="#" class="text-blue-700 text-md hover:text-blue-500">link 1</a></span>
                </div>
                <div class="flex flex-col">
                    <span class="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Contact us</span>
                    <span class="my-2"><i class="fas fa-phone"></i>&nbsp;01777777777</span>
                    <span class="my-2"><i class="fas fa-envelope"></i>&nbsp;true.tour.mentor@gmail.com</span>
                    <span class="my-2"><i class="fas fa-map-marker-alt"></i>&nbsp;House-12, Lane-12, Block-X, Mirpur-2, Dhaka-1216, Bangladesh</span>
                </div>
            </div>
        </div>
    </div>
    <div class="container mx-auto px-6">
        <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div class="sm:w-2/3 text-center py-6">
                <p class="text-sm text-blue-700 font-bold mb-2">
                &copy; 2021 Copyrights | All rights reserved by the <span className="font-bold">True Tour Mentor</span>
                </p>
            </div>
        </div>
    </div>
</footer>
    );
};

export default Footer;