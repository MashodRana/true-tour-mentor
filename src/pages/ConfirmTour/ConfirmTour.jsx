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
            .then(res => res.json())
            .then(data => setPlanDetail(data));
    }, [])

    const handleTourConfirmation = (evnt) => {
        const name = user.displayName;
        const email = user.email;
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;
        const numPeople = numPeopleRef.current.value;
        const prefDate = dateRef.current.value;
        const data = { name, email, phone, address, numPeople, prefDate, planId, orderStatus:'pending',title:planDetail.title, cost:planDetail.cost  };
        fetch('https://shrieking-spider-08076.herokuapp.com/add-order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => setConfirmationMsg(data.message));
        evnt.preventDefault();
    }
    return (
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
                    <button>Confirm</button>
                </div>
            </section>

            <section>
                <h2>Please Provide your details information to confir your tour.</h2>
                <div>
                    <form onSubmit={handleTourConfirmation}>
                        <div>
                            <label htmlFor="">Name:</label>
                            <label htmlFor="">{user.displayName}</label>
                        </div>
                        <div>
                            <label htmlFor="">Email: </label>
                            <label htmlFor="">{user.email}</label>
                        </div>
                        <div>
                            <label htmlFor="">Phone:</label>
                            <input type="number" ref={phoneRef} placeholder="01756565656" />
                        </div>
                        <div>
                            <label htmlFor="">Address</label>
                            <input type="text" ref={addressRef} placeholder="your address" />
                        </div>
                        <div>
                            <label htmlFor="">Number of people:</label>
                            <input type="number" ref={numPeopleRef} />
                        </div>
                        <div>
                            <label htmlFor="">Prefered date:</label>
                            <input type="date" ref={dateRef} name="" id="" />
                        </div>

                        <div>
                            <input type="submit" value="Submit" />
                        </div>
                    </form>

                    {confirmationMsg && <div>
                        <h3 className="text-2xl">{confirmationMsg}</h3>
                    </div>
                    }
                </div>
            </section>

        </main>
    );
};

export default ConfirmTour;