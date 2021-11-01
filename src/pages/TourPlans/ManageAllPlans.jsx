import React, { useEffect, useState } from "react";
// import useAuth from "../../hooks/useAuth";

const ManageAllPlans = () => {
  const [allPlans, setAllPlans] = useState([]);

  useEffect(() => {
    const url = `https://shrieking-spider-08076.herokuapp.com/all-orders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPlans(data));
  }, []);

  const deletePlan = (planId) => {
    const flag = window.confirm(
      "Are you sure you want to cancel your our plan"
    );
    if (flag) {
      const url = `https://shrieking-spider-08076.herokuapp.com/remove-order/${planId}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const newPlans = allPlans.filter((plan) => plan._id !== planId);
          setAllPlans(newPlans);
          alert(data.message);
        });
    }
  };

  const processPlan = (id)=>{
      const url = `https://shrieking-spider-08076.herokuapp.com/update-order-status/${id}`;
      fetch(url, {
          method:'PUT'
      })
      .then(res=>res.json())
      .then(data=>{
          alert(data.message);
          window.location.reload();
      })
  }

  return (
    <main className="container lg:w-11/12 mx-auto">
      <section className="my-16">
        <h1 className="text-3xl mb-8">Manage All Plans</h1>
        <div>
          <div class="grid md:grid-cols-3 grid-cols-1 lg:gap-6 md:gap-4">
            {allPlans.length!==0 ? (
              allPlans.map((plan) => (
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
                      className="py-1 px-2 rounded border mr-4 border border-green-400 text-green-600 hover:bg-green-600 hover:text-white"
                      onClick = {()=>processPlan(plan._id)}
                      >
                        Process Plan
                      </button>
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
              <p className="text-3xl text-yellow-600">There are no plans.</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ManageAllPlans;
