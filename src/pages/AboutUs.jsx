import React from "react";
import './AboutUs.css'
import aboutUs from '../images/about-us.svg';
const AboutUs = () => {
    return (
        <main>
            <section className="container mx-auto">
                <div className="grid grid-cols-2 gap-2">
                    <div><img src={aboutUs} alt="" /></div>
                    <div>
                        <h2 className="text-3xl">True Tour Mentor</h2>
                        <p>A Local Tours and Travel Planner Organization in Dhaka Bangladesh </p>
                    </div>
                </div>
            </section>
            <section className="container mx-auto">
                <h2 className="text-2xl text-center">Your Trusted Travel Mentor</h2>
                <p className="text-justify">
                    <span className="text-bold">True Tour Mentor</span> is a fast growing Tours and Travel Planner in Dhaka Bangladesh.

                    We started our journey in 2009. We are 100% local tour operator in Bangladesh. We always operate all tours by our own guides.

                    We don’t just offer tours and travel services but also provide reliable and hassle free travel planning facilities.

                    If you are planning to explore THE BANGLADESH, then we are here to Keep SURPRISING YOU!! We always make the tour comfortable and hassle free.
                </p>
            </section>
        </main>
    );
};

export default AboutUs;