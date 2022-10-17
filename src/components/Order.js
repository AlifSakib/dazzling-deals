import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../utilities/fakedb";
import Cart from "./Cart";
import ReviewItem from "./ReviewItem";

const Order = () => {
  const loadedData = useLoaderData();
  const { products, initialCart } = loadedData;
  const [cart, setCart] = useState(initialCart);

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  const deletItem = (id) => {
    const rest = cart.filter((item) => item.id !== id);
    setCart(rest);
    removeFromDb(id);
  };

  return (
    <div className="flex  mx-auto lg:w-6/12 md:w-5/6 my-24">
      <div className="w-1/2">
        {cart.map((item) => (
          <ReviewItem
            key={item.id}
            item={item}
            deletItem={deletItem}
          ></ReviewItem>
        ))}
        {cart.length === 0 && (
          <h1 className="font-montserrat text-xl font-bold">
            No Item From Review ,{" "}
            <span className="text-blue-700 underline underline-offset-4">
              <Link to="/shop">Shop Here</Link>
            </span>
          </h1>
        )}
      </div>
      <div className="w-1/2 font-montserrat bg-sky-400 h-96 py-10 rounded-lg mx-8 sticky top-0">
        <Cart cart={cart} clearCart={clearCart}>
          <Link to="/shipping">
            <button className="bg-red-500 text-white text-center rounded-lg py-1 w-full mt-3">
              Proceed Shipping
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
