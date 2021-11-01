import React from "react";
import { Link} from "react-router-dom";
// import useLocalStorage from "../../hooks/useLocalStorage";
import './PlanCard.css'

const PlanCard = (props) => {
    const { title, image, cost, duration, _id } = props.plan;
    // const { addToStorage } = useLocalStorage();
    return (
        <div className="tour-plan">
            <div className="text-center" >
                <img src={image} alt="" />
            </div>
            <div className="p-2 my-2">
                <h4 className="text-xl">{title}</h4>
                <p className="text-gray-700"><span className="font-bold">Cost:</span> {cost} TK</p>
                <p className="text-gray-700">Long: {duration}</p>
                <p className="mt-6 text-center"><Link to={`/confirm-tour/${_id}`} className="border py-1 lg:px-8 md:px-5 m-2 border-red-400 rounded text-red-700 hover:bg-red-400 hover:text-white ">Confirm</Link></p>
            </div>
        </div>
    );
};

export default PlanCard;