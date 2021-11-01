import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ConfirmTour = () => {
  const { planId } = useParams();
  const [planDetail, setPlanDetail] = useState([]);
  const [confirmationMsg, setConfirmationMsg] = useState(null);

  const { user } = useAuth();
  const phoneRef = useRef();
  const addressRef = useRef();
  const numPeopleRef = useRef();
  const dateRef = useRef();

  useEffect(() => {
    const url = `https://shrieking-spider-08076.herokuapp.com/tour-plan-detail/${planId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPlanDetail(data));
  }, []);

  const handleTourConfirmation = (evnt) => {
    const name = user.displayName;
    const email = user.email;
    const phone = phoneRef.current.value;
    const address = addressRef.current.value;
    const numPeople = numPeopleRef.current.value;
    const prefDate = dateRef.current.value;
    const data = {
      name,
      email,
      phone,
      address,
      numPeople,
      prefDate,
      planId,
      orderStatus: "pending",
      title: planDetail.title,
      cost: planDetail.cost,
    };
    fetch("https://shrieking-spider-08076.herokuapp.com/add-order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        phoneRef.current.value = "";
        addressRef.current.value = "";
        dateRef.current.value = "";
        numPeopleRef.current.value = "";

      });
    evnt.preventDefault();
  };
  return (
    <main className="container mx-auto my-16">
      <section className="lg:w-3/4 mx-auto">
        <div class="grid grid-cols-1">
          <div className="text-center">
            <img className="lg:w-1/2" src={planDetail.image} alt="" />
          </div>
          <div className="my-6 p-2">
            <h2 className="text-3xl">{planDetail.title}</h2>
            <p className="text-lg text-gray-400">Cost: {planDetail.cost} Tk</p>
            <p className="text-lg text-gray-400">
              Longivity: {planDetail.duration}
            </p>
            <p className="py-3 text-md text-gray-400">
              {planDetail.description}
            </p>
          </div>
        </div>
      </section>
      <hr className="bg-red-400 pt-0.5" />
      <section className="pt-8">
        <h2 class="text-center text-gray-400 font-bold text-2xl uppercase">
          Please Provide your details information to confirm the tour.
        </h2>
        <div class=" flex items-center text-lg">
          <form
            onSubmit={handleTourConfirmation}
            class="p-10 md:w-2/3 lg:w-1/2 mx-auto rounded">
            <div class="shadow">
              <div class="flex items-center bg-red-400 rounded-t-lg border-white-500 border-b">
                <label
                  for="name"
                  class="w-20 text-right mr-8 p-4 text-purple-200"
                >
                  Name
                </label>
                <label
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Put in your name"
                  class=
                  "flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none text-white overflow-ellipsis overflow-hidden"
                >
                  {user.displayName}
                </label>
              </div>
              <div class="flex items-center bg-red-400 border-white-500 border-b">
                <label
                  for="name"
                  class="w-20 text-right mr-8 p-4 text-purple-200"
                >
                  Email
                </label>
                <label
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Put in your name"
                  class=
                  "flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none text-white overflow-ellipsis overflow-hidden"
                >
                  {user.email}
                </label>
              </div>
              <div class="flex items-center bg-red-400 border-white-500 border-b">
                <label
                  for="name"
                  class="w-20 text-right mr-8 p-4 text-purple-200"
                >
                  Phone
                </label>
                <input
                  required
                  ref={phoneRef}
                  type="number"
                  name="name"
                  id="name"
                  placeholder="Put in your Phone"
                  class=
                  "flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none text-white overflow-ellipsis overflow-hidden"
                />
              </div>
              <div class="flex items-center bg-red-400 border-white-500 border-b">
                <label
                  for="name"
                  class="w-20 text-right mr-8 p-4 text-purple-200"
                >
                  Address
                </label>
                <input
                  required
                  ref={addressRef}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Put in your address"
                  class=
                  "flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none text-white overflow-ellipsis overflow-hidden"
                />
              </div>
              <div class="flex items-center bg-red-400 border-white-500 border-b">
                <label
                  for="name"
                  class="w-20 text-right mr-8 p-4 text-purple-200"
                >
                  Person
                </label>
                <input
                  required
                  ref={numPeopleRef}
                  type="number"
                  name="name"
                  id="name"
                  placeholder="How many people will join the tour."
                  class=
                  "flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none text-white overflow-ellipsis overflow-hidden"
                />
              </div>

              <div class="flex items-center bg-red-400  rounded-b-lg border-purple-500 mb-10">
                <label
                  for="twitter"
                  class="w-20 text-right p-4 mr-8 text-purple-200"
                >
                  Prefered Date
                </label>
                <input
                  required
                  ref={dateRef}
                  type="date"
                  name="twitter"
                  id="twitter"
                  placeholder="Put in Twitter pseudonym"
                  class="flex-1 p-4 pl-0 bg-transparent placeholder-red-300 outline-none text-white overflow-ellipsis overflow-hidden"
                />
              </div>

            </div>
            <input
              class="bg-green-400 block w-full rounded py-4 text-white font-bold shadow cursor-pointer"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </section>
    </main>
  );
};

export default ConfirmTour;
