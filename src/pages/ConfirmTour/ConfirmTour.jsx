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
      .then((data) => setConfirmationMsg(data.message));
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
          <form action="" class="p-10 md:w-2/3 lg:w-1/2 mx-auto rounded">
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
              <div class="flex items-center bg-red-400 rounded-t-lg border-white-500 border-b">
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
              <div class="flex items-center bg-red-400 rounded-t-lg border-white-500 border-b">
                <label
                  for="name"
                  class="w-20 text-right mr-8 p-4 text-purple-200"
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Put in your Phone"
                  class=
                  "flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none text-white overflow-ellipsis overflow-hidden"
                />
              </div>
              <div class="flex items-center bg-red-400 rounded-t-lg border-white-500 border-b">
                <label
                  for="name"
                  class="w-20 text-right mr-8 p-4 text-purple-200"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Put in your address"
                  class=
                  "flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none text-white overflow-ellipsis overflow-hidden"
                />
              </div>
              <div class="flex items-center bg-red-400 rounded-t-lg border-white-500 border-b">
                <label
                  for="name"
                  class="w-20 text-right mr-8 p-4 text-purple-200"
                >
                  Person
                </label>
                <input
                  type="text"
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
                  type="date"
                  name="twitter"
                  id="twitter"
                  placeholder="Put in Twitter pseudonym"
                  class="flex-1 p-4 pl-0 bg-transparent placeholder-red-300 outline-none text-white overflow-ellipsis overflow-hidden"
                />
              </div>

            </div>
            <button class="bg-pink-400 block w-full rounded py-4 text-white font-bold shadow">
              Submit
            </button>
          </form>
        </div>
      </section>
      {/* <section className="mt-8">
        <h2 className="text-2xl">
          Please Provide your details information to confirm the tour.
        </h2>
        <div className="py-6">
          <form onSubmit={handleTourConfirmation}>
            <div className="py-1">
              <label className="text-xl mr-4" htmlFor="">
                Name:
              </label>
              <label className="text-xl "></label>
            </div>
            <div className="py-1">
              <label className="text-xl mr-4">Email: </label>
              <label className="text-xl">{user.email}</label>
            </div>
            <div className="py-1">
              <label className="text-lg mr-4">Phone:</label>
              <input
                className="border border-red-400 rounded"
                type="number"
                ref={phoneRef}
                placeholder="01756565656"
              />
            </div>
            <div className="py-1">
              <label className="text-lg mr-4">Address</label>
              <input
                className="border border-red-400 rounded"
                type="text"
                ref={addressRef}
                placeholder="your address"
              />
            </div>
            <div className="py-1">
              <label className="text-lg mr-4">Number of people:</label>
              <input
                className="border border-red-400 rounded"
                type="number"
                ref={numPeopleRef}
              />
            </div>
            <div className="py-1">
              <label className="text-lg mr-4">Prefered date:</label>
              <input
                className="border border-red-400 rounded"
                type="date"
                ref={dateRef}
                name=""
                id=""
              />
            </div>

            <div className="py-1">
              <input type="submit" value="Submit" />
            </div>
          </form>

          {confirmationMsg && (
            <div>
              <h3 className="text-2xl">{confirmationMsg}</h3>
            </div>
          )}
        </div>
      </section> */}
    </main>
  );
};

export default ConfirmTour;
