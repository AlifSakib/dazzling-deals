import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Product = ({ product, addToCart }) => {
  const { img, name, price, seller, ratings } = product;
  return (
    <div className="w-[250px] h-[450px] rounded-lg border border-slate-300   relative font-poppins text-gray-700 mb-5 ">
      <div className="flex m-2">
        <img className="rounded-lg" src={img} alt="" />
      </div>
      <div className=" mx-3 mt-4">
        <div>
          <p className="font-bold overflow-hidden">{name.slice(0, 20)}</p>
          <button className="text-sm bg-slate-00 text-sky-400 px-3 py-1 rounded-full mt-2 font-bold border border-black">
            Buy Now - ${price}
          </button>
        </div>
        <div className="absolute bottom-16 text-xs">
          <p>Manufecture : {seller}</p>
          <p>Rating : {ratings}</p>
        </div>
      </div>
      <div className="absolute bottom-0 w-full text-center py-1 bg-sky-400 font-bold rounded-lg text-white">
        <button
          className="flex justify-center items-center space-x-4 w-full"
          onClick={() => addToCart(product)}
        >
          <p>Add To Cart</p>
          <FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Product;
