import React from "react";
import './AboutUs.css'
import aboutUs from '../images/about-us.svg';
const AboutUs = () => {
    return (
        <main>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src={aboutUs} />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">True Tour Mentor
                            <br class="hidden lg:inline-block" />Your <span className="text-red-400">Trusted</span> Travel Mentor.
                        </h1>
                        <p class="mb-8 leading-relaxed"><span className="text-bold">True Tour Mentor</span> is a fast growing Tours and Travel Planner in Dhaka Bangladesh.

                            We started our journey in 2009. We are 100% local tour operator in Bangladesh. We always operate all tours by our own guides.

                            We don’t just offer tours and travel services but also provide reliable and hassle free travel planning facilities.

                            If you are planning to explore THE BANGLADESH, then we are here to Keep SURPRISING YOU!! We always make the tour comfortable and hassle free.</p>

                    </div>
                </div>
            </section>
            <section class="text-gray-600 body-font relative">
                
                <div class="container px-5 mx-auto flex">
                    <div class=" mx-auto lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                        <p class="leading-relaxed mb-5 text-gray-600">Positive and negtive both feedback are appreciated.</p>
                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button class="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Submit</button>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default AboutUs;