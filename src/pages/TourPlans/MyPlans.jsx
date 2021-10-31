import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const MyPlans = () => {
    const { user } = useAuth();
    const [myPlans, setMyPlans] = useState(null);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const url = `https://shrieking-spider-08076.herokuapp.com/my-orders/${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyPlans(data));
    }, [])

    const deletePlan = (planId) => {
        const flag = window.confirm("Are you sure you want to cancel your our plan");
        if (flag) {
            const url = `https://shrieking-spider-08076.herokuapp.com/remove-order/${planId}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const newPlans = myPlans.filter(plan => plan._id !== planId);
                    setMyPlans(newPlans);
                    setMessage(data.message);
                    alert(message);
                })
        }
        
    }
    return (
        <div>
            {
                myPlans ? myPlans.map(plan => <div>
                    <h4 className="text-xl">{plan.title}</h4>
                    <p>Status: {plan.orderStatus}</p>
                    <p>Number of People: {plan.numPeople}</p>
                    <p>Prefered Date: {plan.prefDate}</p>
                    <p>Cost: {plan.cost}</p>
                    <p>Total Cost: {plan.cost * plan.numPeople}</p>
                    <div>
                        <button className="border p-2" onClick={() => deletePlan(plan._id)}>Cancel Plan</button>
                    </div>
                </div>)
                    : <p>There are no plans.</p>
            }
        </div>
    );
};

export default MyPlans;