import React, { useEffect, useState } from "react";
import PlanCard from "../components/PlanCard/PlanCard";
import './Home.css'
const Home = () => {
    const [tourPlans, setTourPlans] = useState([]);
    useEffect(()=>{
        const url = "https://shrieking-spider-08076.herokuapp.com/tour-plans"
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTourPlans(data.slice(0,8)))
    },[])
    return (
        <>
            <main>
                <section className="intro-section">
                    <h2 className="text-4xl green-600 text-center">We help <br /> to create  <br /> colorfull memories</h2>
                </section>
                <section className="tour-plans-section container mx-auto my-16">
                    <h2 className="text-3xl text-center">Offered Tour Plans</h2>
                    <p className="text-xl text-center">Find your prefereable one</p>
                    <div className="tour-plans">
                        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {
                                tourPlans.map(plan=> <PlanCard
                                key = {plan.id}
                                plan = {plan}
                                />)
                            }
                        </div>
                    </div>

                </section>
            </main>
        </>
    );
};

export default Home;