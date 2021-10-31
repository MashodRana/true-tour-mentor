import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const ManageAllPlans = () => {
    const [allPlans, setAllPlans] = useState(null);
    const [message, setMessage] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        const url = `https://shrieking-spider-08076.herokuapp.com/all-orders`;
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPlans(data))
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
                    const newPlans = allPlans.filter(plan => plan._id !== planId);
                    setAllPlans(newPlans);
                    setMessage(data.message);
                    alert(message);
                })
        }

    }
    return (
        <main className="container mx-auto">
            <section>
                <h1 className="text-3xl">Manage All Plans</h1>
                <div>
                    {
                        allPlans ? allPlans.map(plan => <>
                            <h4 className="text-xl">{plan.title}</h4>
                            <p>Status: {plan.orderStatus}</p>
                            <p>Number of People: {plan.numPeople}</p>
                            <p>Prefered Date: {plan.prefDate}</p>
                            <p>Cost: {plan.cost}</p>
                            <p>Total Cost: {plan.cost * plan.numPeople}</p>
                            <div>
                                <button className="border p-2" onClick={() => deletePlan(plan._id)}>Cancel Plan</button>
                            </div>
                        </>)
                            : <p>There are no plans.</p>
                    }
                </div>
            </section>
        </main>
    );
};

export default ManageAllPlans;