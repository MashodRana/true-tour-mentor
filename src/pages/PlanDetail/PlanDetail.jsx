import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PlanDetail.css'


const PlanDetail = ()=>{
    const {planId} = useParams();
    const [planDetail, setPlanDetail] = useState([]);

    useEffect(()=>{
        const url = `https://shrieking-spider-08076.herokuapp.com/tour-plan-detail/${planId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPlanDetail(data));
    },[])
    return(
        <main className="container mx-auto">
            <section>
                <div><img src={planDetail.image} alt="" /></div>
                <div>
                    <h2>{planDetail.title}</h2>
                    <p>Cost: {planDetail.cost} Tk</p>
                    <p>Duration: {planDetail.duration}</p>
                    <p>{planDetail.description}</p>
                </div>
                <div>
                    <button>Add to Wish List</button>
                    <button>Confirm</button>
                </div>
            </section>
            
        </main>
    );
};

export default PlanDetail;