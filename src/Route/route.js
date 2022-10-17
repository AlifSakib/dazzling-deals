import { createBrowserRouter } from "react-router-dom";
import Inventory from "../components/Inventory";
import Order from "../components/Order";
import Shipping from "../components/Shipping";
import Shop from "../components/Shop";
import SignIn from "../components/SignIn";
import Signup from "../components/Signup";
import Root from "../layout/Root";
import { productsAndCartLoader } from "../loaders/productAndCartLoader";
import PrivateRoute from "../privateRoute/PrivateRoute";

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
        path: "shipping",
        element: (
          <PrivateRoute>
            <Shipping></Shipping>
          </PrivateRoute>
        ),
      },
      {
        path: "order",
        loader: productsAndCartLoader,
        element: <Order></Order>,
      },
      {
        path: "inventory",
        element: (
          <PrivateRoute>
            <Inventory></Inventory>
          </PrivateRoute>
        ),
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
