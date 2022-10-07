import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { addToDb, deleteShoppingCart, getFromDb } from "../utilities/fakedb";
import Cart from "./Cart";
import Product from "./Product";

const Shop = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState([]);
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  const addToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((item) => item.id === selectedProduct.id);

    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  useEffect(() => {
    const storedCart = getFromDb();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  return (
    <div className="flex justify-between">
      <div className="w-9/12 mx-auto grid grid-cols-2 lg:grid-cols-5 mt-20">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
      <div className="bg-sky-500 w-64 text-center font-montserrat sticky top-0 h-screen ">
        <div className="text-xl font-bold py-4 bg-white my-5 mx-4 rounded-md">
          <p>Order Summary</p>
        </div>
        <div>
          <Cart cart={cart} clearCart={clearCart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
