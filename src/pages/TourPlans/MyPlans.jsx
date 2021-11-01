import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyPlans = () => {
    const { user } = useAuth();
    const [myPlans, setMyPlans] = useState([]);
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
        <main className="container lg:w-11/12 mx-auto">
      <section className="my-16">
        <h1 className="text-3xl mb-8">My Plans</h1>
        <div>
          <div class="grid md:grid-cols-3 grid-cols-1 lg:gap-6 md:gap-4">
            {myPlans.length!==0 ? (
              myPlans.map((plan) => (
                <>
                  <div className="shadow-md p-4">
                    <h4 className="text-xl">{plan.title}</h4>
                    <p className="text-gray-400 text-sm">
                      Number of People: {plan.numPeople}
                    </p>
                    <p className="text-gray-400 text-sm">
                      Prefered Date: {plan.prefDate}
                    </p>
                    <p className="text-gray-400 text-sm">Cost: {plan.cost}</p>
                    <p className="text-gray-400 text-sm">
                      Total Cost: {plan.cost * plan.numPeople}
                    </p>
                    <p className="text-gray-400 text-sm">Status: <span className="bg-yellow-300 rounded border text-black">{plan.orderStatus}</span></p>
                    <div className="mt-6">
                      
                      <button
                        className="py-1 px-2 rounded border border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
                        onClick={() => deletePlan(plan._id)}
                      >
                        Cancel Plan
                      </button>
                    </div>
                  </div>
                </>
              ))
            ) : (
              <p className="text-3xl bg-red-100 p-2 rounded">There are no plans.</p>
            )}
          </div>
        </div>
      </section>
    </main>
    );
};

export default MyPlans;