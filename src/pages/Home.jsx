import React, { useEffect, useState } from "react";
import PlanCard from "../components/PlanCard/PlanCard";
import whyImage from '../images/Questions-pana.png';
import './Home.css';

const Home = () => {
    const [tourPlans, setTourPlans] = useState([]);
    useEffect(() => {
        const url = "https://shrieking-spider-08076.herokuapp.com/tour-plans"
        fetch(url)
            .then(res => res.json())
            .then(data => setTourPlans(data))
    }, [])
    return (
        <>
            <main>
                <section className="intro-section my-5">
                    <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold text-center">We help to create  <br /> <span className="md:ml-64 ml-6 text-red-400">Colorfull Memories</span></h2>
                </section>
                <section className="tour-plans-section container mx-auto my-16">
                    <h2 className="lg:text-4xl md:text-3xl text-2xl text-center text-red-400">Offered Tour Plans</h2>
                    <p className="text-xl text-center">Find your prefereable one</p>
                    <hr className="w-1/4 mx-auto bg-red-400 rounded border border-red-400 mb-16" />
                    <div className="tour-plans md:w-11/12 mx-auto">
                        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {
                                tourPlans.map(plan => <PlanCard
                                    key={plan.id}
                                    plan={plan}
                                />)
                            }
                        </div>
                    </div>

                </section>
                <section class="reason-section text-gray-600 body-font">
                    <h2 className="lg:text-4xl md:text-3xl text-2xl text-center text-red-400">Why Us?</h2>
                    <p className="text-xl text-center">We always give our best</p>
                    <hr className="w-1/4 mx-auto bg-red-400 rounded border border-red-400" />
                    <div class="container lg:w-11/12 px-5 py-24 mx-auto flex flex-wrap">
                        <div class="flex flex-wrap w-full">
                            <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                                <div class="flex relative pb-12">
                                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-grow pl-4">
                                        <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Budget Friendly</h2>
                                        <p class="leading-relaxed">We offered budget friendly tour comparatively others.</p>
                                    </div>
                                </div>
                                <div class="flex relative pb-12">
                                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-grow pl-4">
                                        <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Healthy Food</h2>
                                        <p class="leading-relaxed">We provide tasty and healthy food.</p>
                                    </div>
                                </div>
                                <div class="flex relative pb-12">
                                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-grow pl-4">
                                        <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Best Guide</h2>
                                        <p class="leading-relaxed">Our guides are well trained and well behaved.</p>
                                    </div>
                                </div>
                                
                                <div class="flex relative">
                                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-grow pl-4">
                                        <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">No Hidden Cost</h2>
                                        <p class="leading-relaxed">We always clear about our cost.</p>
                                    </div>
                                </div>
                            </div>
                            <img class=" md:w-1/2 object-center rounded-lg md:mt-0 mt-12" src={whyImage} alt="step" />
                        </div>
                    </div>
                </section>
                <section class="text-gray-600 body-font">
                    <h2 className="lg:text-4xl md:text-3xl text-2xl text-center text-red-400">Happy Traveler</h2>
                    <p className="text-xl text-center">We care about our client comfort</p>
                    <hr className="w-1/4 mx-auto bg-red-400 rounded border border-red-400 mb-16" />
                    <div class="container md:px-5 py-16 mx-auto">
                        <div class="flex flex-wrap -m-4">
                            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                                <div class="h-full text-center">
                                    <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://thetravelagentinc.com/wp-content/uploads/2017/09/21231352_1831717917159002_297608762488145936_n-200x200.jpg" />
                                    <p class="leading-relaxed">Amber, Hi. We had a wonderful time! I highly recommend the Resort at Longboat Key & the area. It was perfect for not being crowded on the beach w/ Covid concerns. The beach is for guests only & beautiful!....Thanks so much for finding the perfect spot for us for spring break :)</p>
                                    <span class="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
                                    <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Stephanie B.</h2>
                                </div>
                            </div>
                            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                                <div class="h-full text-center">
                                    <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://thetravelagentinc.com/wp-content/uploads/2017/09/21231352_1831717917159002_297608762488145936_n-200x200.jpg" />
                                    <p class="leading-relaxed">Amber, Thank you again for all of your help planning our trip to Germany and Austria! We are still talking about how it truly was a trip of a lifetime. I was worried about planning a trip for ages 9 to 78, but you took the stress away and helped create a wonderful travel experience. I greatly appreciated the communication throughout the planning process, and keeping us organized with clear schedules, local contacts, and all of our documents. My parents were so happy to return to the cities where they were born, and the boys and I loved having their childhood stories come to life as we toured their home towns. The hotels were all wonderful – excellent locations, beautiful rooms, and great breakfasts to start each day. </p>
                                    <span class="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
                                    <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Starla M.</h2>
                                </div>
                            </div>
                            \<div class="lg:w-1/3 lg:mb-0 p-4">
                                <div class="h-full text-center">
                                    <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://image.freepik.com/free-photo/indian-man-simple-white-tee-studio-portrait_53876-102833.jpg" />
                                    <p class="leading-relaxed">Our travel guide Mr Adnan really very skilled and made our planning just as we wanted .though it was a last minute call still he made us availed one decent hotel as per our requirement. Definitely looking forward to plan my next trip with Travel Triangle and of course thanks to Adnan .</p>
                                    <span class="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
                                    <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Himansu Panda</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;