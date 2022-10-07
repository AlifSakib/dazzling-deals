import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ReviewItem = ({ item }) => {
  const { name, price, quantity, img } = item;
  return (
    <div className="flex w-full font-montserrat border border-slate-300 rounded-lg p-2 mb-3">
      <div>
        <img className="w-24 rounded-lg" src={img} alt="" />
      </div>
      <div className="flex justify-between w-full items-center mx-4">
        <div className="text-xs">
          <p>{name}</p>
          <p>Price : ${price}</p>
          <p>Quantity : {quantity}</p>
        </div>
        <div>
          <button className="bg-red-200 px-3 py-2 rounded-full text-red-600">
            <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
