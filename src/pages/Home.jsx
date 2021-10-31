import React from "react";
import { NavLink } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import './Home.css'
const Home = () => {
    const {addToStorage} = useLocalStorage();
    return (
        <>
            <main>
                <section className="intro-section">
                    <h2 className="text-4xl green-600">We help <br /> to create  <br /> colorfull memories</h2>
                </section>
                <section className="tour-plans-section container mx-auto my-16">
                    <h2 className="text-3xl">Offered Tour Plans</h2>
                    <p className="text-xl">Find your prefereable one</p>
                    <div className="tour-plans">
                        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
                            <div>
                                <div>
                                    <img src="https://sgp1.digitaloceanspaces.com/cosmosgroup/news/7725621_New%20Project%20(4).jpg" alt="" />
                                </div>
                                <div>
                                    <h4>Saint-Martin</h4>
                                    <p>Cost: 6000 TK</p>
                                    <button className="border p-1 m-2" onClick = {()=>addToStorage(1)}>Add Wish List</button>
                                    <NavLink to='/tour-plan'>
                                    <button className="border p-1 m-2">View Details</button>
                                    </NavLink>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/77/22/14/amiakhum.jpg?w=700&h=500&s=1" alt="" />
                                </div>
                                <div>
                                    <h4>Bandarban</h4>
                                    <p>Cost: 5500 TK</p>
                                    <button className="border p-1 m-2" onClick = {()=>addToStorage(2)}>Add Wish List</button>
                                    <button className="border p-1 m-2">View Details</button>
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