import React from "react";

const Cart = ({ cart, clearCart, children }) => {
  console.log(cart);
  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const item of cart) {
    quantity = quantity + item.quantity;
    total = total + item.price * quantity;
    shipping = shipping + item.shipping * quantity;
  }
  let tax = parseFloat((total * 0.1).toFixed(2));
  return (
    <div className="text-lg text-start mx-auto w-9/12 space-y-3">
      <div className="flex justify-between bg-white px-2 rounded-md">
        <span>Item Selected :</span> <span>{quantity}</span>
      </div>
      <div className="flex justify-between bg-white px-2 rounded-md">
        <span>Total :</span> <span>${total}</span>
      </div>
      <div className="flex justify-between bg-white px-2 rounded-md">
        <span>Shipping :</span> <span>${shipping}</span>
      </div>
      <div className="flex justify-between bg-white px-2 rounded-md">
        <span>Tax :</span> <span>${tax}</span>
      </div>
      <div
        className="flex flex-col justify-center items-center
      my-4 bg-white px-2 rounded-md"
      >
        <span className="font-bold underline underline-offset-8">
          Grand Total
        </span>
        <span>${total + quantity + tax}</span>
      </div>
      <div className="bg-red-500 text-white text-center rounded-lg py-1">
        <button className="w-full" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
      {children}
    </div>
  );
};

export default Cart;
