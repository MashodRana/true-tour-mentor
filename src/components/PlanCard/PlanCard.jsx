import React from "react";
import { Link, NavLink } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import './PlanCard.css'

const PlanCard = (props) => {
    const { title, image, cost, duration, _id } = props.plan;
    const { addToStorage } = useLocalStorage();
    return (
        <div className="tour-plan">
            <div className="text-center" >
                <img src={image} alt="" />
            </div>
            <div className="p-2 my-2">
                <h4 className="text-xl">{title}</h4>
                <p className="text-gray-700"><span className="font-bold">Cost:</span> {cost} TK</p>
                <p className="text-gray-700">Long: {duration}</p>
                <p className="mt-6 text-center"><Link to={`/confirm-tour/${_id}`} className="border py-1 px-4 m-2 bg-green-700 text-white rounded-md ">Confirm</Link></p>
            </div>
        </div>
    );
};

export default PlanCard;