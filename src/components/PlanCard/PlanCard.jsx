import React from "react";
import { Link, NavLink } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";

const PlanCard = (props) => {
    const {title, image, cost, duration, _id} = props.plan;
    const {addToStorage} = useLocalStorage();
    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h4>{title}</h4>
                <p>Cost: {cost} TK</p>
                <p>{duration}</p>
                {/* <button className="border p-1 m-2" onClick={() => addToStorage(_id)}>Add Wish List</button> */}
                <Link to={`/confirm-tour/${_id}`} className="border p-1 m-2">Confirm</Link>
                {/* <Link to={`/plan-detail/${_id}`}>
                    <button className="border p-1 m-2">View Details</button>
                </Link> */}
            </div>
        </div>
    );
};

export default PlanCard;