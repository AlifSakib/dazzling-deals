import { createBrowserRouter } from "react-router-dom";
import Order from "../components/Order";
import Shop from "../components/Shop";
import SignIn from "../components/SignIn";
import Signup from "../components/Signup";
import Root from "../layout/Root";
import { productsAndCartLoader } from "../loaders/productAndCartLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "shop",
        loader: () => fetch("products.json"),
        element: <Shop></Shop>,
      },
      {
        path: "order",
        loader: productsAndCartLoader,
        element: <Order></Order>,
      },
      {
        path: "signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);
